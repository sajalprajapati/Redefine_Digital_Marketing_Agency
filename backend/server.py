from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Owner email destination (for future email integration)
OWNER_EMAIL = os.environ.get('OWNER_EMAIL', 'Amoreviamediaagency@gmail.com')

# Create the main app without a prefix
app = FastAPI(title="Amoreviamediaagency API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ====================== Models ======================
class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(..., min_length=1, max_length=4000)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    message: str
    destination: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ====================== Routes ======================
@api_router.get("/")
async def root():
    return {"message": "Amoreviamediaagency API is running"}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(payload: ContactSubmissionCreate):
    submission = ContactSubmission(
        name=payload.name.strip(),
        email=payload.email,
        company=(payload.company or '').strip() or None,
        message=payload.message.strip(),
        destination=OWNER_EMAIL,
    )
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.contact_submissions.insert_one(doc)
    except Exception as e:
        logging.exception("Failed to save contact submission")
        raise HTTPException(status_code=500, detail="Could not save submission") from e
    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts():
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except Exception:
                pass
    return items


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

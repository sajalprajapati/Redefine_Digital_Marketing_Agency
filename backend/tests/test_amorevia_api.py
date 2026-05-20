"""Backend API tests for Amoreviamediaagency"""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://webpage-replica-tool.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root endpoint
def test_root_returns_greeting(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "Amoreviamediaagency" in data["message"]


# Contact - validation
def test_contact_missing_fields(api):
    r = api.post(f"{BASE_URL}/api/contact", json={})
    assert r.status_code == 422


def test_contact_invalid_email(api):
    r = api.post(f"{BASE_URL}/api/contact", json={
        "name": "TEST_User", "email": "not-an-email", "message": "hello"
    })
    assert r.status_code == 422


def test_contact_missing_message(api):
    r = api.post(f"{BASE_URL}/api/contact", json={
        "name": "TEST_User", "email": "test@example.com"
    })
    assert r.status_code == 422


# Contact - happy path
def test_contact_create_and_persist(api):
    payload = {
        "name": "TEST_Jane Doe",
        "email": "TEST_jane@example.com",
        "company": "TEST_Co",
        "message": "Hello, I want to know more about your services."
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["company"] == payload["company"]
    assert data["message"] == payload["message"]
    assert data["destination"] == "Amoreviamediaagency@gmail.com"
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data
    assert "_id" not in data

    # GET should include this submission
    r2 = api.get(f"{BASE_URL}/api/contact")
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    assert any(it.get("id") == data["id"] for it in items), "Inserted submission not in list"
    # ensure no _id leakage
    for it in items:
        assert "_id" not in it


def test_contact_optional_company(api):
    payload = {
        "name": "TEST_NoCo",
        "email": "TEST_noco@example.com",
        "message": "No company test"
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["company"] is None
    assert data["destination"] == "Amoreviamediaagency@gmail.com"

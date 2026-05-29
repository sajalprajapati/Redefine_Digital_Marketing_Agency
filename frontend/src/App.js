import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { PageShell } from "@/components/Layout";
import { ScrollToHash } from "@/components/ScrollToHash";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Insights from "@/pages/Insights";
import Process from "@/pages/Process";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToHash />
        <PageShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageShell>
        <Toaster richColors theme="dark" position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;

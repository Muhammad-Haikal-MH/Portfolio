import React from "react";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import AiAssistant from "./pages/AiAssistant";
import { BrowserRouter, Route, Routes } from "react-router";
import Notfound from "./pages/Notfound";
import Layout from "./pages/Layout";
import About from "./pages/About";
import DetailProject from "./project/DetailProject";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/ai-assistant" element={<AiAssistant />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<DetailProject />} />
            <Route path="/*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

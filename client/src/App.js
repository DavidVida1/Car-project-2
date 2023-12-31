import GlobalStyles from "./GlobalStyles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Meetings from "./Meetings";
import Footer from "./Footer";
import "./cssReset.css";

function App() {
  return (
    <BrowserRouter basename="/carV2/">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        //*
        <Route path="*" element={<Home />} />
        */
        <Route path="/meetings/:name" element={<Meetings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

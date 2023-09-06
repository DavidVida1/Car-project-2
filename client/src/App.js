import GlobalStyles from "./GlobalStyles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Footer";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

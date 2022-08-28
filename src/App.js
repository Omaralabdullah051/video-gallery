import React from "react";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Videos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

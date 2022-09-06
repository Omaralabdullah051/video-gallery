import React, { useLayoutEffect } from "react";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<Videos />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;

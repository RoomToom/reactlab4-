import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Profile from "./Profile";
import Login from "./Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isAuthenticated");
    if (loggedInStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (username === "Admin" && password === "12345") {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {isAuthenticated && <li><button onClick={handleLogout}>Logout</button></li>}
        </ul>
      </nav>
      <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login handleLogin={handleLogin} />} />
  <Route path="/news" element={<News />} />
  <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
</Routes>
    </Router>
  );
}

export default App;

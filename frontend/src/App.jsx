// src/App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx"; 

// Pages
import Home from "./pages/Home.jsx";
import TinyDemo from "./pages/TinyDemo.jsx";

export default function App() {
  return (
    <Router>
      <div>

        {/* Navbar with NavLink so active link gets a style */}
        <nav
          style={{
            display: "flex",
            gap: "16px",
            padding: "16px",
            background: "#eee"
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "red" : "black",
              textDecoration: "none"
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/demo"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "red" : "black",
              textDecoration: "none"
            })}
          >
            TinyDemo
          </NavLink>
        </nav>

        {/* Changing content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<TinyDemo />} />
            {/* Catch-all for anything that doesn't match */}
            <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  );
}
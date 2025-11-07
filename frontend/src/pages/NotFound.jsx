// src/pages/NotFound.jsx
import { useLocation } from "react-router-dom";


export default function NotFound() {
  const location = useLocation();

  return (
    <div>
      <h1>404 — Page Not Found</h1>
      <p>The path <strong>{location.pathname}</strong> does not exist.</p>
    </div>
  );
}
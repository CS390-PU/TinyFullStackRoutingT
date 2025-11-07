// src/pages/TinyDemo.jsx
import { useEffect, useState } from "react";

export default function TinyDemo() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Auto-detect backend URL (5173 → 4000)
    const host = window.location.hostname;

    let baseUrl = "";
    if (host.includes("-5173")) {
      baseUrl = `https://${host.replace("-5173", "-4000")}`;
    } else if (host.includes("localhost")) {
      baseUrl = "http://localhost:4000";
    } else {
      baseUrl = `https://${host}`;
    }

    console.log("🔍 Using backend URL:", baseUrl);

    fetch(`${baseUrl}/demo`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        console.log("✅ Data received:", json);
        setData(json);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>Tiny Demo (Mongo → Express → React)</h1>

      {error && <div style={{ color: "crimson" }}>Error: {error}</div>}

      <pre
        style={{
          background: "#f6f8fa",
          padding: 16,
          borderRadius: 8,
          marginTop: 20,
          whiteSpace: "pre-wrap",
          color: "black",       // ✅ FIX — forces JSON to be visible
          fontSize: "16px",
          fontFamily: "monospace",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

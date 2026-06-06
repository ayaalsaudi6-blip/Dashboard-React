import React from "react";
function Header({ toggleDarkMode, darkMode }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>

      <div>
        <h1 style={{ fontSize: "32px", fontWeight: "700", color: darkMode ? "#ffffff" : "#0f172a", marginBottom: "5px" }}>
          Enterprise Admin Dashboard
        </h1>

        <p style={{ color: "#64748b", fontSize: "15px" }}>
          Monitor system performance and manage business operations.
        </p>
      </div>

      <div
        style={{
          background: "#e2e8f0",
          padding: "12px 18px",
          borderRadius: "12px",
          fontWeight: "600",
          color: "#334155"
        }} >
          ⚙️ Admin Account
      </div>

      <button 
        onClick={toggleDarkMode}
        style={{ 
            padding: "8px 16px", 
            borderRadius: "20px", 
            border: "none", 
            backgroundColor: darkMode ? "#374151" : "#e5e7eb", 
            color: darkMode ? "#f3f4f6" : "#1f2937", 
            cursor: "pointer", 
            fontWeight: "bold"
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

    </header>
  );
}
export default Header;
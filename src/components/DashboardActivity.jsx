import React from 'react';
function DashboardActivity({ darkMode }) {
  return (
    <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        flexWrap: "wrap",
      }}
    >

      {/* System Status */}
      <section
        style={{ flex: 2,
          minWidth: "350px",
          backgroundColor: darkMode ? "#1f2937" : "#fff",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2
          style={{
            color: darkMode ? "#ffffff" : "#0f172a",
            marginBottom: "20px",  }} >
          ⚙️ System Status
        </h2>

        <div
          style={{
            backgroundColor: "#e2e8f0",
            borderRadius: "10px",
            height: "12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: "#3b82f6",
            }}
          ></div>
        </div>

        <p
          style={{
            marginTop: "12px",
            color: darkMode ? "#d1d5db" : "#64748b",
          }}
        >
          Server Resource Usage: 70%
        </p>
      </section>

      {/* System Logs */}
      <section
        style={{
          flex: 1,
          minWidth: "250px",
          backgroundColor: darkMode ? "#1f2937" : "#fff",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <div className="activity-card">
          <h2
            style={{
              color: darkMode ? "#ffffff" : "#0f172a",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            System Logs
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              color: darkMode ? "#d1d5db" : "#64748b",
            }}
          >
            <li style={{ marginBottom: "12px" }}>
              ✅ <span>System Update Completed</span>
            </li>

            <li style={{ marginBottom: "12px" }}>
              📦 <span>New Order #1001 Received</span>
            </li>

            <li style={{ marginBottom: "12px" }}>
              💾 <span>Database Backup Successful</span>
            </li>

            <li style={{ marginBottom: "12px" }}>
              ⚠️ <span>User Management Warning</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default DashboardActivity;
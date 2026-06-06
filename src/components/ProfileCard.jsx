function ProfileCard({ darkMode }) {
  return (
    <section
  style={{
backgroundColor: darkMode ? "#1f2937" : "#fff",
    borderRadius: "16px",
    padding: "25px",
  }}
>      <h3
        style={{  color: darkMode ? "#fff" : "#0f172a"
        }}  >
          System Administrator</h3>     

<p style={{ color: darkMode ? "#d1d5db" : "#64748b" }}>
  Manage your store, track sales, and monitor system performance.
      </p>

      <div style={{ marginTop: "20px" }}>

<h4 style={{ color: darkMode ? "#fff" : "#0f172a" }}>
  Status: All systems operational
</h4>
      </div>
    </section>
  );
}

export default ProfileCard;
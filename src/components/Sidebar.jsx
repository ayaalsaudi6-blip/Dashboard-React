function Sidebar({ darkMode }) {
  return (
    <aside
      className="sidebar"
      style={{
        backgroundColor: darkMode ? "#1e293b" : "#1e293b",
      }}
    >
      <h2 className="sidebar-title">Analytics</h2>

      <nav>
        <ul className="sidebar-menu">
          <li className="sidebar-item active">
            🏠 <span>Dashboard</span>
          </li>

          <li className="sidebar-item">
            📊 <span>Analytics</span>
          </li>

          <li className="sidebar-item">
            👥 <span>Users</span>
          </li>

          <li className="sidebar-item">
            ⚙️ <span>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
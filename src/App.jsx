import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WelcomeBanner from "./components/WelcomeBanner";
import ProfileCard from "./components/ProfileCard";
import StatCard from "./components/StatCard";
import DashboardActivity from "./components/DashboardActivity";
import RecentOrders from "./components/RecentOrders";
import "./App.css";
import SalesChart from "./components/SalesChart";


function App() {
  const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  document.body.classList.toggle('dark');
  setDarkMode(!darkMode);
};
  const stats = [
    { title: "Total Sales", value: "$12,500", borderColor: "#3b82f6" },
    { title: "Total Orders", value: "1,240", borderColor: "#10b981" },
    { title: "Active Users", value: "320", borderColor: "#f59e0b" },
    { title: "Net Revenue", value: "$8,900", borderColor: "#8b5cf6" },
  ];

  const projects = [
    { id: "#1001", customer: "Sarah Ahmad", service: "Wireless Headphones", status: "Completed", statusBg: "#d1fae5", statusColor: "#065f46" },
    { id: "#1002", customer: "John Doe", service: "Mechanical Keyboard", status: "In Progress", statusBg: "#dbeafe", statusColor: "#1e40af" },
    { id: "#1003", customer: "Ali Noor", service: "Smart Watch", status: "Pending", statusBg: "#fef3c7", statusColor: "#92400e" },
  ];

  return (
    <div className="app-container" style={{ display: "flex", minHeight: "100vh", backgroundColor: darkMode ? "#16171d" : "#f8fafc", fontFamily: "sans-serif" }}>
      
      <div className="sidebar-wrapper" style={{ width: '260px', background: '#1e293b', color: '#fff' }}>
        <Sidebar darkMode={darkMode} />
      </div>

      <main className="main-content" style={{ flex: 1, padding: "30px" }}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        
        <WelcomeBanner darkMode={darkMode} />
        <ProfileCard darkMode={darkMode} />
        <SalesChart darkMode={darkMode} />

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "25px", marginBottom: "30px" }}>
          {stats.map((card) => (
            <StatCard
              key={card.title}
              title={card.title}
              value={card.value}
              borderColor={card.borderColor}
              darkMode={darkMode}
            />
          ))}
        </section>

        <DashboardActivity darkMode={darkMode} />
        <RecentOrders projects={projects} darkMode={darkMode} /> 
      </main>
    </div>
  );
}

export default App;
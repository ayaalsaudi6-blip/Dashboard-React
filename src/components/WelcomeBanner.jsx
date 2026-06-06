import React from 'react';

function WelcomeBanner({ darkMode }) {
  const greeting = "Welcome back, Admin 👋 ";

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ 
        color: darkMode ? '#ffffff' : '#0f172a', 
        fontSize: '26px', 
        fontWeight: 'bold', 
        margin: 0}}>
        {greeting}
      </h2>
    </div>
  );
}
export default WelcomeBanner;
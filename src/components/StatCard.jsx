import React from 'react';
import './StatCard.css'; // استدعاء ملف css الخاص بالكارتس

// Props بدل ما نعمل 3 كروت بنعمل كارت واحد 
function StatCard({ title, value, borderColor, }) {
  return (
    <div className="stat-card" style={{ borderLeft: `5px solid ${borderColor}` }}>
      <h3 className="stat-card-title">{title}</h3>
      <p className="stat-card-value">{value}</p>
    </div>
  );
}

export default StatCard;
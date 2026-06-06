import React, { useState } from 'react';
function RecentOrders({ projects, darkMode }) {

const [searchTerm, setSearchTerm] = useState("");
const filteredProjects = projects.filter((project) =>
  
  project.customer.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<section
  className="table-section"
  style={{
    backgroundColor: darkMode ? "#1f2937" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px"
  }}
>      <h2>Recent Orders</h2>

      <input
  type="text"
  placeholder="Search customer..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    padding: "10px",
    marginBottom: "20px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  }}
/>
<table
  style={{
    color: darkMode ? "#fff" : "#000"
  }}
>        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
{filteredProjects.map((order) => (            
  <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.service}</td>
              <td>
                <span 
                  className="status" 
                  style={{ backgroundColor: order.statusBg, color: order.statusColor }}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default RecentOrders;
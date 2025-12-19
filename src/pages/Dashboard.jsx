import { DollarSign, ShoppingCart, Users, Package } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatCard from '../components/StatCard';
import { salesData, mockOrders } from '../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
  const recentOrders = mockOrders.slice(0, 5);

  const getStatusClass = (status) => {
    const statusMap = {
      'Delivered': 'status-delivered',
      'Processing': 'status-processing',
      'Shipped': 'status-shipped',
      'Pending': 'status-pending',
    };
    return statusMap[status] || 'status-default';
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with your store today.</p>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          icon={DollarSign}
          trend="up"
          trendValue="12.5%"
          color="primary"
        />
        <StatCard
          title="Total Orders"
          value="1,254"
          icon={ShoppingCart}
          trend="up"
          trendValue="8.2%"
          color="success"
        />
        <StatCard
          title="Total Customers"
          value="892"
          icon={Users}
          trend="up"
          trendValue="5.7%"
          color="warning"
        />
        <StatCard
          title="Total Products"
          value="456"
          icon={Package}
          trend="down"
          trendValue="2.1%"
          color="danger"
        />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Orders Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="recent-orders-card">
        <div className="card-header">
          <h3>Recent Orders</h3>
          <a href="/orders" className="view-all-link">View All</a>
        </div>
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>${order.total}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from 'react';
import { Search, Filter, Eye, Download } from 'lucide-react';
import { mockOrders } from '../data/mockData';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toString().includes(searchTerm);
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (status) => {
    const statusMap = {
      'Delivered': 'status-delivered',
      'Processing': 'status-processing',
      'Shipped': 'status-shipped',
      'Pending': 'status-pending',
    };
    return statusMap[status] || 'status-default';
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="orders-page">
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage and track all orders</p>
        </div>
        <button className="btn btn-primary">
          <Download size={20} />
          Export
        </button>
      </div>

      <div className="page-content">
        <div className="filters-bar">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <Filter size={20} />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">#{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.items}</td>
                  <td className="order-total">${order.total}</td>
                  <td>
                    <select 
                      className={`status-select ${getStatusClass(order.status)}`}
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td>
                    <button className="icon-btn" title="View Details">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="empty-state">
            <p>No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

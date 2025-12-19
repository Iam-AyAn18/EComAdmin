import { useState } from 'react';
import { Search, UserPlus, Mail, Phone } from 'lucide-react';
import { mockCustomers } from '../data/mockData';
import './Customers.css';

const Customers = () => {
  const [customers] = useState(mockCustomers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="customers-page">
      <div className="page-header">
        <div>
          <h1>Customers</h1>
          <p>Manage your customer base</p>
        </div>
        <button className="btn btn-primary">
          <UserPlus size={20} />
          Add Customer
        </button>
      </div>

      <div className="page-content">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="customers-grid">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="customer-card">
              <div className="customer-avatar">
                {customer.name.charAt(0)}
              </div>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <div className="customer-detail">
                  <Mail size={16} />
                  <span>{customer.email}</span>
                </div>
                <div className="customer-stats">
                  <div className="stat">
                    <span className="stat-label">Orders</span>
                    <span className="stat-value">{customer.orders}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Total Spent</span>
                    <span className="stat-value">${customer.totalSpent}</span>
                  </div>
                </div>
                <div className="customer-footer">
                  <span className={`status-badge ${customer.status === 'VIP' ? 'status-vip' : 'status-active'}`}>
                    {customer.status}
                  </span>
                  <span className="join-date">Joined {customer.joinDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;

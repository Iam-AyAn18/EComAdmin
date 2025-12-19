import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  FolderTree,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import './MainLayout.css';

const MainLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/orders', icon: ShoppingCart, label: 'Orders' },
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/categories', icon: FolderTree, label: 'Categories' },
  ];

  return (
    <div className="main-layout">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>ECommerce Admin</h2>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/login" className="nav-item logout">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <div className="main-content">
        <header className="header">
          <button 
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="header-right">
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <div className="user-avatar">A</div>
            </div>
          </div>
        </header>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

export const mockProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 45, image: 'https://via.placeholder.com/150', status: 'Active' },
  { id: 2, name: 'Smart Watch', category: 'Electronics', price: 249.99, stock: 23, image: 'https://via.placeholder.com/150', status: 'Active' },
  { id: 3, name: 'Running Shoes', category: 'Fashion', price: 79.99, stock: 67, image: 'https://via.placeholder.com/150', status: 'Active' },
  { id: 4, name: 'Coffee Maker', category: 'Home & Kitchen', price: 129.99, stock: 12, image: 'https://via.placeholder.com/150', status: 'Active' },
  { id: 5, name: 'Yoga Mat', category: 'Sports', price: 29.99, stock: 89, image: 'https://via.placeholder.com/150', status: 'Active' },
  { id: 6, name: 'Laptop Bag', category: 'Accessories', price: 49.99, stock: 34, image: 'https://via.placeholder.com/150', status: 'Active' },
  { id: 7, name: 'Desk Lamp', category: 'Home & Kitchen', price: 39.99, stock: 56, image: 'https://via.placeholder.com/150', status: 'Active' },
  { id: 8, name: 'Water Bottle', category: 'Sports', price: 19.99, stock: 120, image: 'https://via.placeholder.com/150', status: 'Active' },
];

export const mockOrders = [
  { id: 1001, customer: 'John Doe', date: '2024-01-15', total: 299.97, status: 'Delivered', items: 3 },
  { id: 1002, customer: 'Jane Smith', date: '2024-01-16', total: 149.99, status: 'Processing', items: 1 },
  { id: 1003, customer: 'Bob Johnson', date: '2024-01-16', total: 79.99, status: 'Shipped', items: 1 },
  { id: 1004, customer: 'Alice Brown', date: '2024-01-17', total: 199.98, status: 'Pending', items: 2 },
  { id: 1005, customer: 'Charlie Wilson', date: '2024-01-17', total: 449.95, status: 'Processing', items: 5 },
  { id: 1006, customer: 'Diana Davis', date: '2024-01-18', total: 99.99, status: 'Delivered', items: 1 },
  { id: 1007, customer: 'Evan Martinez', date: '2024-01-18', total: 329.97, status: 'Shipped', items: 4 },
  { id: 1008, customer: 'Fiona Garcia', date: '2024-01-19', total: 159.98, status: 'Pending', items: 2 },
];

export const mockCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', orders: 12, totalSpent: 1299.99, joinDate: '2023-06-15', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 8, totalSpent: 899.50, joinDate: '2023-07-20', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', orders: 15, totalSpent: 1899.99, joinDate: '2023-05-10', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', orders: 5, totalSpent: 599.99, joinDate: '2023-08-05', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', orders: 20, totalSpent: 2499.99, joinDate: '2023-04-01', status: 'VIP' },
  { id: 6, name: 'Diana Davis', email: 'diana@example.com', orders: 3, totalSpent: 299.99, joinDate: '2023-09-12', status: 'Active' },
];

export const mockCategories = [
  { id: 1, name: 'Electronics', products: 145, icon: '💻' },
  { id: 2, name: 'Fashion', products: 234, icon: '👔' },
  { id: 3, name: 'Home & Kitchen', products: 189, icon: '🏠' },
  { id: 4, name: 'Sports', products: 98, icon: '⚽' },
  { id: 5, name: 'Accessories', products: 156, icon: '👜' },
  { id: 6, name: 'Books', products: 267, icon: '📚' },
];

export const salesData = [
  { name: 'Jan', sales: 4000, orders: 240 },
  { name: 'Feb', sales: 3000, orders: 198 },
  { name: 'Mar', sales: 5000, orders: 320 },
  { name: 'Apr', sales: 4500, orders: 278 },
  { name: 'May', sales: 6000, orders: 389 },
  { name: 'Jun', sales: 5500, orders: 349 },
];

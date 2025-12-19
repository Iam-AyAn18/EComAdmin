# ECommerce Admin Dashboard

A modern, feature-rich React.js admin dashboard for eCommerce stores. Built with React 19, Vite, React Router, and Recharts.

## 🚀 Features

### Dashboard Overview
- **Analytics Cards**: Real-time metrics for revenue, orders, customers, and products
- **Sales Charts**: Interactive line and bar charts showing sales and order trends
- **Recent Orders**: Quick view of the latest orders with status tracking

### Product Management
- **Product Grid View**: Beautiful card-based product display
- **CRUD Operations**: Add, edit, and delete products
- **Search & Filter**: Quick product search functionality
- **Stock Tracking**: Visual indicators for low stock items
- **Product Details**: Name, category, price, stock, and images

### Order Management
- **Order Tracking**: Complete order list with detailed information
- **Status Management**: Update order status (Pending, Processing, Shipped, Delivered)
- **Search & Filter**: Filter orders by status and search by customer or order ID
- **Export Functionality**: Export orders for reporting

### Customer Management
- **Customer Profiles**: View customer details with avatars
- **Customer Insights**: Track orders and total spent per customer
- **VIP Status**: Identify high-value customers
- **Search**: Quick customer lookup

### Category Management
- **Category Organization**: Organize products into categories with emoji icons
- **Product Count**: Track products per category
- **CRUD Operations**: Add, edit, and delete categories

### Authentication
- **Login Page**: Beautiful gradient login interface
- **Demo Access**: Easy demo authentication for testing

## 🛠️ Technologies Used

- **React 19.2**: Latest React with hooks
- **Vite**: Lightning-fast build tool and dev server
- **React Router DOM**: Client-side routing
- **Recharts**: Beautiful, responsive charts
- **Lucide React**: Modern icon library
- **CSS3**: Custom styling with CSS variables

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Iam-AyAn18/EComAdmin.git
   cd EComAdmin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🎨 Project Structure

```
EComAdmin/
├── src/
│   ├── components/        # Reusable components
│   │   └── StatCard.jsx   # Analytics stat cards
│   ├── layouts/           # Layout components
│   │   └── MainLayout.jsx # Main app layout with sidebar
│   ├── pages/             # Page components
│   │   ├── Dashboard.jsx  # Dashboard overview
│   │   ├── Products.jsx   # Product management
│   │   ├── Orders.jsx     # Order management
│   │   ├── Customers.jsx  # Customer management
│   │   ├── Categories.jsx # Category management
│   │   └── Login.jsx      # Authentication
│   ├── data/              # Mock data
│   │   └── mockData.js    # Sample data for demo
│   ├── App.jsx            # Main app component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── public/                # Static assets
├── index.html             # HTML template
└── package.json           # Dependencies and scripts

```

## 🎯 Usage

### Demo Login
- Navigate to the login page
- Enter any email and password
- Click "Sign In" to access the dashboard

### Managing Products
1. Go to the Products page
2. Click "Add Product" to create a new product
3. Fill in the product details (name, category, price, stock)
4. Use the search bar to find specific products
5. Edit or delete products using the action buttons

### Managing Orders
1. Navigate to the Orders page
2. View all orders in the table
3. Change order status using the dropdown
4. Search for orders by customer name or order ID
5. Filter by status using the filter dropdown

### Managing Customers
1. Go to the Customers page
2. View customer cards with order history
3. Search for customers by name or email
4. Track customer spending and activity

### Managing Categories
1. Navigate to the Categories page
2. Click "Add Category" to create new categories
3. Assign emoji icons to categories
4. Edit or delete categories as needed

## 🎨 Screenshots

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/7d372788-2128-4b33-bcf5-8b18093a255c)

### Products
![Products](https://github.com/user-attachments/assets/ee1adfc5-40cd-4bfb-b8b2-8f62220f2287)

### Orders
![Orders](https://github.com/user-attachments/assets/58b95aeb-d077-40b6-b5e6-3c5a0641d679)

### Customers
![Customers](https://github.com/user-attachments/assets/b6a367bc-206b-4878-95e6-c218af262f3e)

### Categories
![Categories](https://github.com/user-attachments/assets/ef87e822-71fb-44cd-a1ca-4967e959b46a)

### Login
![Login](https://github.com/user-attachments/assets/c99fe36c-af24-499e-87a3-a6bb4074b2d7)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features Highlights

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with gradient accents
- **Interactive Charts**: Real-time data visualization
- **Dark Sidebar**: Professional dark theme navigation
- **Modal Forms**: User-friendly forms for creating and editing
- **Status Badges**: Color-coded status indicators
- **Search & Filter**: Quick data access and filtering
- **Toggle Sidebar**: Collapsible sidebar for more space

## 🚧 Future Enhancements

- Backend API integration
- Real authentication system
- Database integration
- User roles and permissions
- Advanced analytics and reporting
- Email notifications
- File upload for product images
- Dark mode toggle
- Multi-language support

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created with ❤️ for eCommerce businesses

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

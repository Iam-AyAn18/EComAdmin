import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = {
      id: editingProduct?.id || Date.now(),
      name: formData.get('name'),
      category: formData.get('category'),
      price: parseFloat(formData.get('price')),
      stock: parseInt(formData.get('stock')),
      status: formData.get('status'),
      image: 'https://via.placeholder.com/150'
    };

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? productData : p));
    } else {
      setProducts([...products, productData]);
    }
    setShowModal(false);
    setEditingProduct(null);
  };

  return (
    <div className="products-page">
      <div className="page-header">
        <div>
          <h1>Products</h1>
          <p>Manage your product inventory</p>
        </div>
        <button className="btn btn-primary" onClick={handleAddNew}>
          <Plus size={20} />
          Add Product
        </button>
      </div>

      <div className="page-content">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className={`stock-badge ${product.stock < 20 ? 'low-stock' : ''}`}>
                  Stock: {product.stock}
                </span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <div className="product-actions">
                    <button className="icon-btn" title="View">
                      <Eye size={18} />
                    </button>
                    <button className="icon-btn" onClick={() => handleEdit(product)} title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="icon-btn danger" onClick={() => handleDelete(product.id)} title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" name="name" defaultValue={editingProduct?.name} required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input type="text" name="category" defaultValue={editingProduct?.category} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price</label>
                  <input type="number" name="price" step="0.01" defaultValue={editingProduct?.price} required />
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input type="number" name="stock" defaultValue={editingProduct?.stock} required />
                </div>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" defaultValue={editingProduct?.status || 'Active'}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingProduct ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

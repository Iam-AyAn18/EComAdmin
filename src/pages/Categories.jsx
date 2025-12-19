import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { mockCategories } from '../data/mockData';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState(mockCategories);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingCategory(null);
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const categoryData = {
      id: editingCategory?.id || Date.now(),
      name: formData.get('name'),
      icon: formData.get('icon'),
      products: editingCategory?.products || 0,
    };

    if (editingCategory) {
      setCategories(categories.map(c => c.id === editingCategory.id ? categoryData : c));
    } else {
      setCategories([...categories, categoryData]);
    }
    setShowModal(false);
    setEditingCategory(null);
  };

  return (
    <div className="categories-page">
      <div className="page-header">
        <div>
          <h1>Categories</h1>
          <p>Organize your products into categories</p>
        </div>
        <button className="btn btn-primary" onClick={handleAddNew}>
          <Plus size={20} />
          Add Category
        </button>
      </div>

      <div className="page-content">
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.products} products</p>
              </div>
              <div className="category-actions">
                <button className="icon-btn" onClick={() => handleEdit(category)} title="Edit">
                  <Edit size={18} />
                </button>
                <button className="icon-btn danger" onClick={() => handleDelete(category.id)} title="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingCategory ? 'Edit Category' : 'Add New Category'}</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Category Name</label>
                <input type="text" name="name" defaultValue={editingCategory?.name} required />
              </div>
              <div className="form-group">
                <label>Icon (Emoji)</label>
                <input type="text" name="icon" defaultValue={editingCategory?.icon} maxLength="2" required />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingCategory ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

import React, { useState } from 'react';
import './Marketplace.css';

const Marketplace = ({ isLoggedIn, userRole}) => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    description: '',
    contact: '',
    image: '',
  });

  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minQuantity: '',
    maxQuantity: '',
  });

  const [imagePreview, setImagePreview] = useState('');

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      name: '',
      category: '',
      quantity: '',
      price: '',
      description: '',
      contact: '',
      image: '',
    });
    setImagePreview('');
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.category === '' || product.category === filters.category;
    const matchesPrice =
      (!filters.minPrice || product.price >= filters.minPrice) &&
      (!filters.maxPrice || product.price <= filters.maxPrice);
    const matchesQuantity =
      (!filters.minQuantity || product.quantity >= filters.minQuantity) &&
      (!filters.maxQuantity || product.quantity <= filters.maxQuantity);
    return matchesCategory && matchesPrice && matchesQuantity;
  });

const handleBooking = (productIndex) => {
  const bookedQty = 1; // Or let hotel choose quantity later
  const updatedProducts = [...products];

  if (updatedProducts[productIndex].availableQty >= bookedQty) {
    updatedProducts[productIndex].availableQty -= bookedQty;

    updatedProducts[productIndex].bookings.push({
      hotel: 'Hotel ABC', // later replace with actual user
      quantity: bookedQty,
      date: new Date().toLocaleString()
    });

    setProducts(updatedProducts);
    alert("Booking successful!");
  } else {
    alert("Not enough quantity available!");
  }
};



  return (
    <div className="marketplace">
      <h2>Marketplace</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="vegetables">Vegetables</option>
          <option value="grains">Grains</option>
          <option value="fruits">Fruits</option>
        </select>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="minQuantity"
          placeholder="Min Quantity"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxQuantity"
          placeholder="Max Quantity"
          onChange={handleFilterChange}
        />
      </div>

      {/* Product Form */}
      {isLoggedIn && userRole === 'farmer' && (
        <form className="add-product-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <select name="category" value={formData.category} onChange={handleInputChange} required>
            <option value="">Select Category</option>
            <option value="vegetables">Vegetables</option>
            <option value="grains">Grains</option>
            <option value="fruits">Fruits</option>
          </select>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (kg)"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price per kg (₹)"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
          {imagePreview && <img src={imagePreview} alt="Preview" />}
          <button type="submit">Add Product</button>
        </form>
      )}

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            {product.image && <img src={product.image} alt={product.name} />}
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Quantity:</strong> {product.quantity} kg</p>
            <p><strong>Price:</strong> ₹{product.price}/kg</p>
            <p>{product.description}</p>
            {isLoggedIn ? (
              <p><strong>Contact:</strong> {product.contact}</p>
            ) : (
              <em>Login to view contact details</em>
            )}
            {isLoggedIn && userRole === 'hotel' && product.availableQty > 0 && (
              <button onClick={() => handleBooking(index)}>
                Book Product
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

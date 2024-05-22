import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../styles.css';

const BagForm = ({ currentBag, onSave }) => {
  const [bag, setBag] = useState(currentBag || { name: '', brand: '', description: '', price: '', imageUrl: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setBag(currentBag || { name: '', brand: '', description: '', price: '', imageUrl: '' });
  }, [currentBag]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBag(prevBag => ({
      ...prevBag,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(bag);
    setBag({ name: '', brand: '', description: '', price: '', imageUrl: '' });
    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="add-button">
        <button onClick={() => setShowForm(!showForm)}>
          <FaPlus />
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={bag.name}
            onChange={handleChange}
            placeholder="Bag Name"
            required
          />
          <input
            type="text"
            name="brand"
            value={bag.brand}
            onChange={handleChange}
            placeholder="Brand"
            required
          />
          <textarea
            name="description"
            value={bag.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="number"
            name="price"
            value={bag.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <input
            type="url"
            name="imageUrl"
            value={bag.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default BagForm;

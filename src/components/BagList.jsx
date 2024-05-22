import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import '../styles.css';

const BagList = ({ bags, onEdit, onDelete }) => {
  const [editedBag, setEditedBag] = useState(null);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBag({ ...editedBag, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editedBag);
    setEditedBag(null);
  };

  return (
    <ul className="bag-list">
      {bags.map((bag) => (
        <li key={bag.id} className="bag-item">
          <div>
            <img src={bag.imageUrl} alt={bag.name} className="bag-image" />
            {/* Encode bag information in JSON format */}
            <QRCode value={JSON.stringify(bag)} size={50} />
          </div>
          <div className="bag-details">
            {editedBag && editedBag.id === bag.id ? (
              <form onSubmit={handleEditSubmit}>
                {/* Inputs for editing bag */}
                <input
                  type="text"
                  name="name"
                  value={editedBag.name}
                  onChange={handleEditChange}
                  placeholder="Bag Name"
                  required
                />
                <input
                  type="text"
                  name="brand"
                  value={editedBag.brand}
                  onChange={handleEditChange}
                  placeholder="Brand"
                  required
                />
                <textarea
                  name="description"
                  value={editedBag.description}
                  onChange={handleEditChange}
                  placeholder="Description"
                  required
                />
                <input
                  type="number"
                  name="price"
                  value={editedBag.price}
                  onChange={handleEditChange}
                  placeholder="Price"
                  required
                />
                <input
                  type="url"
                  name="imageUrl"
                  value={editedBag.imageUrl}
                  onChange={handleEditChange}
                  placeholder="Image URL"
                  required
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                {/* Display bag details */}
                <h3>{bag.name}</h3>
                <p>{bag.brand}</p>
                <p>{bag.description}</p>
                <p>${bag.price}</p>
              </>
            )}
          </div>
          <div className="bag-actions">
            {/* Edit and delete buttons */}
            <button onClick={() => setEditedBag(bag)}>Edit</button>
            <button onClick={() => onDelete(bag.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BagList;

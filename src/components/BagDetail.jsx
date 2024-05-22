import React from 'react';
import QRCode from 'qrcode.react';
import '../styles.css';

const BagDetail = ({ bag }) => {
  // Decode the JSON-encoded bag information
  const decodedBag = JSON.parse(bag);

  return (
    <div className="container">
      <div className="detail-box">
        <div className="detail-info">
          {/* Display decoded bag details */}
          <h2>Name: {decodedBag.name}</h2>
          <p>Brand: {decodedBag.brand}</p>
          <p>Description: {decodedBag.description}</p>
          <p>Price: ${decodedBag.price}</p>
        </div>
        <div className="qr-code">
          {/* Display QR code with decoded bag information */}
          <QRCode value={bag} />
        </div>
        {/* Additional instructions */}
        <h1>To fully update, please click the "Add or (+)" button above.</h1>
        <h1>Then, click "Save" above when you're done checking!</h1>
      </div>
    </div>
  );
};

export default BagDetail;

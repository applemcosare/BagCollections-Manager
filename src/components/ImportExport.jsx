import React from 'react';
import { CSVLink } from 'react-csv';
import '../styles.css';

const ImportExport = ({ bags, setBags }) => {
  const handleImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split('\n').slice(1);
      const newBags = rows.map(row => {
        const [id, name, description, price, imageUrl] = row.split(',');
        return { id: parseInt(id), name, description, price, imageUrl };
      });
      setBags(newBags);
    };
    reader.readAsText(file);
  };

  return (
    <div className="csv-import-export">
      <input type="file" accept=".csv" onChange={handleImport} />
      <CSVLink data={bags} filename="bag_collection.csv">Export CSV</CSVLink>
    </div>
  );
};

export default ImportExport;

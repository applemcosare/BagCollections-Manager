import React, { useState } from 'react';
import BagForm from './components/BagForm';
import BagList from './components/BagList';
import BagDetail from './components/BagDetail';
import PDFReport from './components/PDFReport';
import ImportExport from './components/ImportExport';
import './styles.css';

const App = () => {
  const [bags, setBags] = useState([
    { id: 1, name: 'Aooke', brand: 'Luivition', description: 'Lorem ipsum dolor sit amet.', price: 100, imageUrl: 'https://c0.wallpaperflare.com/preview/996/268/956/assorted-handbags-lot.jpg' },
    { id: 2, name: 'Dausuke', brand: 'Gucci', description: 'Lorem ipsum dolor sit amet.', price: 200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z7jgOoh5VzgTw8ahOE9teaMSMcFX7a0tP24p3htldXiw91NK8ktSZRcnguqAojJvDOs&usqp=CAU' },
    { id: 3, name: 'Krezzy', brand: 'Fendi', description: 'Lorem ipsum dolor sit amet.', price: 150, imageUrl: 'https://images.unsplash.com/photo-1591561954555-607968c989ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGx1eHVyeSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D' },
    { id: 4, name: 'Clemn', brand: 'Couch', description: 'Lorem ipsum dolor sit amet.', price: 120, imageUrl: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/29/21e24de3-8101-4648-be67-77f0065668ef.jpg' },
    { id: 5, name: 'Dawnki', brand: 'LV', description: 'Lorem ipsum dolor sit amet.', price: 180, imageUrl: 'https://i.pinimg.com/736x/42/36/01/423601d42ee9e1056b9498a527ed6e21.jpg' },
    { id: 6, name: 'KhunNheng', brand: 'Jansport', description: 'Lorem ipsum dolor sit amet.', price: 90, imageUrl: 'https://img.joomcdn.net/bb73b8df4055e3107aaa8131441f06ce3cbb3342_original.jpeg' },
    { id: 7, name: 'Yoko', brand: 'Vanz', description: 'Lorem ipsum dolor sit amet.', price: 130, imageUrl: 'https://m.media-amazon.com/images/I/71mQ9WhRL+S._AC_UF894,1000_QL80_.jpg' },
    { id: 8, name: 'IceM', brand: 'Hermes', description: 'Lorem ipsum dolor sit amet.', price: 250, imageUrl: 'https://c0.wallpaperflare.com/preview/996/268/956/assorted-handbags-lot.jpg' },
    { id: 9, name: 'Marzzix', brand: 'Channel', description: 'Lorem ipsum dolor sit amet.', price: 300, imageUrl: 'https://p.globalsources.com/IMAGES/PDT/B1186575162/lady-handbag.jpg' },
    { id: 10, name: 'Anngh', brand: 'Dior', description: 'Lorem ipsum dolor sit amet.', price: 220, imageUrl: 'https://m.media-amazon.com/images/I/61NJG34iKxL._AC_UF1000,1000_QL80_.jpg' }
  ]);

  const [currentBag, setCurrentBag] = useState(null);

  const addOrUpdateBag = (bag) => {
    if (bag.id) {
      setBags(bags.map(b => (b.id === bag.id ? bag : b)));
    } else {
      bag.id = bags.length ? bags[bags.length - 1].id + 1 : 1;
      setBags([...bags, bag]);
    }
    setCurrentBag(null);
  };

  const deleteBag = (id) => {
    setBags(bags.filter(bag => bag.id !== id));
  };

  return (
    <div className="app">
      <h1>Bag Collection Manager</h1>
      <BagForm currentBag={currentBag} onSave={addOrUpdateBag} />
      <BagList bags={bags} onEdit={setCurrentBag} onDelete={deleteBag} />
      {currentBag && <BagDetail bag={JSON.stringify(currentBag)} />}
      <PDFReport bags={bags} />
      <ImportExport bags={bags} setBags={setBags} />
    </div>
  );
};

export default App;

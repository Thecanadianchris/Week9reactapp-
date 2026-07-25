import { useState } from 'react';
import products from './data/products';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  




  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  




  let filteredProducts = products;
  if (selectedCategory !== 'All') {
    filteredProducts = products.filter((product) => product.category === selectedCategory);
  }




  return (
    <div style={{ padding: '20px' }}>
      <h1>Gallery</h1>

      <div>
        <button onClick={() => handleFilterClick('All')}>All</button>
        <button onClick={() => handleFilterClick('Resin Art')}>Resin Art</button>
        <button onClick={() => handleFilterClick('River Tables')}>River Tables</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ width: '250px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




export default Gallery;
import { useState } from 'react';
import products from '../data/products';
import GalleryItem from '../components/GalleryItem';


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
          <GalleryItem key={product.id} product={product} />
        ))}
        
      </div>
    </div>
  );
}




export default Gallery;
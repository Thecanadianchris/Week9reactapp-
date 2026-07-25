function GalleryItem({ product }) {
  return (
    <div style={{ width: '250px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default GalleryItem;
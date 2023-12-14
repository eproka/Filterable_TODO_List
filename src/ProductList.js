import React from 'react';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>По вашему запросу ничего не найдено</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price}</p>
          <p>Рейтинг: {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
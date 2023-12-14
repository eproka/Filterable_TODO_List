// App.js

import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Filters from './Filters';
import SortingOptions from './SortingOptions';
import { generateRandomProducts } from './productGenerator';
d
const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortingOption, setSortingOption] = useState('priceAsc');

  useEffect(() => {
    // Генерация случайных продуктов
    const generatedProducts = generateRandomProducts(50);
    setProducts(generatedProducts);
    setFilteredProducts(generatedProducts);
  }, []);

  useEffect(() => {
    // Фильтрация продуктов при изменении фильтров
    const filtered = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const descriptionMatch = product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return nameMatch || descriptionMatch;
    });
    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedColors, selectedCategories]);

  useEffect(() => {
    // Сортировка продуктов при изменении опции сортировки
    const sorted = [...filteredProducts];
    switch (sortingOption) {
      case 'priceAsc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'ratingDesc':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    setFilteredProducts(sorted);
  }, [filteredProducts, sortingOption]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors((prevColors) => {
      if (prevColors.includes(color)) {
        return prevColors.filter((c) => c !== color);
      } else {
        return [...prevColors, color];
      }
    });
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleSortingOptionChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <div className="container">
      <h1>Интернет-магазин</h1>
      <Filters
        searchTerm={searchTerm}
        selectedColors={selectedColors}
        selectedCategories={selectedCategories}
        onSearchTermChange={handleSearchTermChange}
        onColorChange={handleColorChange}
        onCategoryChange={handleCategoryChange}
      />
      <SortingOptions sortingOption={sortingOption} onSortingOptionChange={handleSortingOptionChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
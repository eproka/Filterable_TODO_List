import React from 'react';

const Filters = ({
  searchTerm,
  selectedColors,
  selectedCategories,
  onSearchTermChange,
 onColorChange,
  onCategoryChange,
}) => {
  return (
    <div className="filters">
      <h2>Фильтры</h2>
      <div>
        <label htmlFor="search">Поиск:</label>
        <input type="text" id="search" value={searchTerm} onChange={onSearchTermChange} />
      </div>
      <div>
        <label>Цвет:</label>
        <div>
          <label>
            <input type="checkbox" value="red" checked={selectedColors.includes('red')} onChange={onColorChange} />{' '}
            Красный
          </label>
          <label>
            <input type="checkbox" value="blue" checked={selectedColors.includes('blue')} onChange={onColorChange} />{' '}
            Синий
          </label>
          <label>
            <input type="checkbox" value="green" checked={selectedColors.includes('green')} onChange={onColorChange} />{' '}
            Зеленый
          </label>
          <label>
            <input type="checkbox" value="yellow" checked={selectedColors.includes('yellow')} onChange={onColorChange} />{' '}
            Желтый
          </label>
          <label>
            <input type="checkbox" value="purple" checked={selectedColors.includes('purple')} onChange={onColorChange} />{' '}
            Фиолетовый
          </label>
        </div>
      </div>
      <div>
        <label>Категория:</label>
        <div>
          <label>
            <input type="checkbox" value="category1" checked={selectedCategories.includes('category1')} onChange={onCategoryChange} />{' '}
            Категория 1
          </label>
          <label>
            <input type="checkbox" value="category2" checked={selectedCategories.includes('category2')} onChange={onCategoryChange} />{' '}
            Категория 2
          </label>
          <label>
            <input type="checkbox" value="category3" checked={selectedCategories.includes('category3')} onChange={onCategoryChange} />{' '}
            Категория 3
          </label>
          <label>
            <input type="checkbox" value="category4" checked={selectedCategories.includes('category4')} onChange={onCategoryChange} />{' '}
            Категория 4
          </label>
          <label>
            <input type="checkbox" value="category5" checked={selectedCategories.includes('category5')} onChange={onCategoryChange} />{' '}
            Категория 5
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
import React from 'react';

const SortingOptions = ({ sortingOption, onSortingOptionChange }) => {
  return (
    <div className="sorting-options">
      <h2>Сортировка</h2>
      <div>
        <label>
          <input
            type="radio"
            value="priceAsc"
            checked={sortingOption === 'priceAsc'}
            onChange={onSortingOptionChange}
          />{' '}
          Сначала дешевые
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="priceDesc"
            checked={sortingOption === 'priceDesc'}
            onChange={onSortingOptionChange}
          />{' '}
          Сначала дорогие
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="ratingDesc"
            checked={sortingOption === 'ratingDesc'}
            onChange={onSortingOptionChange}
          />{' '}
          Сначала популярные
        </label>
      </div>
    </div>
  );
};

export default SortingOptions;
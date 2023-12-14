import Chance from 'chance';

const chance = new Chance();

export const generateRandomProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: chance.guid(),
      name: chance.word(),
      description: chance.sentence({ words: 10 }),
      color: chance.pickone(['red', 'blue', 'green', 'yellow', 'purple']),
      category: chance.pickone(['category1', 'category2', 'category3', 'category4', 'category5']),
      price: chance.integer({ min: 10, max: 9999 }),
      rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
      imageUrl: chance.pickone([
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ]),
    });
  }
  return products;
};
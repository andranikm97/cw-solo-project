const { modulo } = require('react-native-reanimated');

const db = {
  categories: [
    {
      name: 'fruits',
      id: 1,
      items: [
        { name: 'banana', id: 1 },
        { name: 'apple', id: 2 },
        { name: 'orange', id: 3 },
        { name: 'peach', id: 4 },
      ],
    },
    {
      name: 'meat',
      id: 2,
      items: [
        { name: 'chicken', id: 1 },
        { name: 'lamb', id: 2 },
        { name: 'pork', id: 3 },
        { name: 'beef', id: 4 },
      ],
    },
    {
      name: 'vegetables',
      id: 3,
      items: [
        { name: 'cucumber', id: 1 },
        { name: 'tomato', id: 2 },
        { name: 'carrot', id: 3 },
        { name: 'cabbage', id: 4 },
      ],
    },
    {
      name: 'dairy',
      id: 4,
      items: [
        { name: 'milk', id: 1 },
        { name: 'cheese', id: 2 },
        { name: 'yogurt', id: 3 },
        { name: 'cream', id: 4 },
      ],
    },
  ],
};

module.exports = db;

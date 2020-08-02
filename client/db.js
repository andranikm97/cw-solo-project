const { modulo } = require('react-native-reanimated');
// const { v4: uuidv4 } = require('uuid');
// uuidv4();

const db = {
  categories: [
    {
      name: 'fruits',
      image: require('./assets/fr&vs/_fruits.png'),
      id: 1,
      items: [
        {
          name: 'banana',
          id: 1,
          image: require('./assets/fr&vs/026-banana.png'),
        },
        {
          name: 'apple',
          id: 2,
          image: require('./assets/fr&vs/021-apple.png'),
        },
        {
          name: 'orange',
          id: 3,
          image: require('./assets/fr&vs/017-orange.png'),
        },
        {
          name: 'peach',
          id: 4,
          image: require('./assets/fr&vs/006-peach.png'),
        },
      ],
    },
    {
      name: 'meat',
      image: require('./assets/meats/index.png'),
      id: 2,
      items: [
        { name: 'chicken', id: 1 },
        { name: 'lamb', id: 2 },
        { name: 'pork', id: 3 },
        { name: 'beef', id: 4 },
      ],
    },
    {
      name: 'veggies',
      image: require('./assets/fr&vs/_veggies.png'),
      id: 3,
      items: [
        {
          name: 'cucumber',
          id: 1,
          image: require('./assets/fr&vs/031-cucumber.png'),
        },
        {
          name: 'tomato',
          id: 2,
          image: require('./assets/fr&vs/002-tomato.png'),
        },
        {
          name: 'carrot',
          id: 3,
          image: require('./assets/fr&vs/001-carrots.png'),
        },
        {
          name: 'cauliflower',
          id: 5,
          image: require('./assets/fr&vs/011-cauliflower.png'),
        },
        {
          name: 'pumpkin',
          id: 6,
          image: require('./assets/fr&vs/003-pumpkin.png'),
        },
        {
          name: 'asparagus',
          id: 7,
          image: require('./assets/fr&vs/004-asparagus.png'),
        },
        {
          name: 'radish',
          id: 8,
          image: require('./assets/fr&vs/005-corn.png'),
        },
        {
          name: 'pepper',
          id: 9,
          image: require('./assets/fr&vs/011-cauliflower.png'),
        },
        {
          name: 'turnip',
          id: 10,
          image: require('./assets/fr&vs/012-turnip.png'),
        },
        {
          name: 'bok choy',
          id: 11,
          image: require('./assets/fr&vs/014-bok choy.png'),
        },
        {
          name: 'lettuce',
          id: 12,
          image: require('./assets/fr&vs/016-lettuce.png'),
        },
        {
          name: 'lemon',
          id: 13,
          image: require('./assets/fr&vs/018-lemon.png'),
        },
        {
          name: 'garlic',
          id: 14,
          image: require('./assets/fr&vs/022-garlic.png'),
        },
      ],
    },
    {
      name: 'dairy',
      image: require('./assets/dairy/index.png'),
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

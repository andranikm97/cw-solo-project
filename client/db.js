const { v4: uuidv4 } = require('uuid');

const db = {
  categories: [
    {
      name: 'fruits',
      image: require('./assets/fr&vs/_fruits.png'),
      id: 1,
      items: [
        {
          name: 'peach',
          id: uuidv4(),
          image: require('./assets/fr&vs/006-peach.png'),
        },
        {
          name: 'kiwi',
          id: uuidv4(),
          image: require('./assets/fr&vs/009-kiwi.png'),
        },
        {
          name: 'watermelon',
          id: uuidv4(),
          image: require('./assets/fr&vs/010-watermelon.png'),
        },
        {
          name: 'pineapple',
          id: uuidv4(),
          image: require('./assets/fr&vs/013-pineapple.png'),
        },
        {
          name: 'lemon',
          id: uuidv4(),
          image: require('./assets/fr&vs/018-lemon.png'),
        },
        {
          name: 'cherries',
          id: uuidv4(),
          image: require('./assets/fr&vs/019-cherries.png'),
        },
        {
          name: 'strawberry',
          id: uuidv4(),
          image: require('./assets/fr&vs/020-strawberry.png'),
        },
        {
          name: 'grapes',
          id: uuidv4(),
          image: require('./assets/fr&vs/023-grapes.png'),
        },
        {
          name: 'papaya',
          id: uuidv4(),
          image: require('./assets/fr&vs/025-papaya.png'),
        },
        {
          name: 'banana',
          id: uuidv4(),
          image: require('./assets/fr&vs/026-banana.png'),
        },
        {
          name: 'pomegranate',
          id: uuidv4(),
          image: require('./assets/fr&vs/028-pomegranate.png'),
        },
        {
          name: 'melon',
          id: uuidv4(),
          image: require('./assets/fr&vs/030-melon.png'),
        },
        {
          name: 'apple',
          id: uuidv4(),
          image: require('./assets/fr&vs/021-apple.png'),
        },
        {
          name: 'orange',
          id: uuidv4(),
          image: require('./assets/fr&vs/017-orange.png'),
        },
      ],
    },
    {
      name: 'meat',
      image: require('./assets/meats/index.png'),
      id: 2,
      items: [
        {
          name: 'chicken',
          id: uuidv4(),
          image: require('./assets/meats/chicken.png'),
        },
        {
          name: 'lamb',
          id: uuidv4(),
          image: require('./assets/meats/goat.png'),
        },
        {
          name: 'beef',
          id: uuidv4(),
          image: require('./assets/meats/cow.png'),
        },
        {
          name: 'fish',
          id: uuidv4(),
          image: require('./assets/meats/fish.png'),
        },
        {
          name: 'pork',
          id: uuidv4(),
          image: require('./assets/meats/pig.png'),
        },
      ],
    },
    {
      name: 'veggies',
      image: require('./assets/fr&vs/_veggies.png'),
      id: 3,
      items: [
        {
          name: 'cucumber',
          id: uuidv4(),
          image: require('./assets/fr&vs/031-cucumber.png'),
        },
        {
          name: 'tomato',
          id: uuidv4(),
          image: require('./assets/fr&vs/002-tomato.png'),
        },
        {
          name: 'carrot',
          id: uuidv4(),
          image: require('./assets/fr&vs/001-carrots.png'),
        },
        {
          name: 'cauliflower',
          id: uuidv4(),
          image: require('./assets/fr&vs/011-cauliflower.png'),
        },
        {
          name: 'pumpkin',
          id: uuidv4(),
          image: require('./assets/fr&vs/003-pumpkin.png'),
        },
        {
          name: 'asparagus',
          id: uuidv4(),
          image: require('./assets/fr&vs/004-asparagus.png'),
        },
        {
          name: 'radish',
          id: uuidv4(),
          image: require('./assets/fr&vs/005-corn.png'),
        },
        {
          name: 'pepper',
          id: uuidv4(),
          image: require('./assets/fr&vs/011-cauliflower.png'),
        },
        {
          name: 'turnip',
          id: uuidv4(),
          image: require('./assets/fr&vs/012-turnip.png'),
        },
        {
          name: 'bok choy',
          id: uuidv4(),
          image: require('./assets/fr&vs/014-bok choy.png'),
        },
        {
          name: 'lettuce',
          id: uuidv4(),
          image: require('./assets/fr&vs/016-lettuce.png'),
        },
        {
          name: 'lemon',
          id: uuidv4(),
          image: require('./assets/fr&vs/018-lemon.png'),
        },
        {
          name: 'garlic',
          id: uuidv4(),
          image: require('./assets/fr&vs/022-garlic.png'),
        },

        {
          name: 'broccoli',
          id: uuidv4(),
          image: require('./assets/fr&vs/024-broccoli.png'),
        },
        {
          name: 'onion',
          id: uuidv4(),
          image: require('./assets/fr&vs/027-onion.png'),
        },
        {
          name: 'leek',
          id: uuidv4(),
          image: require('./assets/fr&vs/029-leek.png'),
        },
        {
          name: 'peas',
          id: uuidv4(),
          image: require('./assets/fr&vs/033-peas.png'),
        },
        {
          name: 'kale',
          id: uuidv4(),
          image: require('./assets/fr&vs/034-kale.png'),
        },
        {
          name: 'artichoke',
          id: uuidv4(),
          image: require('./assets/fr&vs/035-artichoke.png'),
        },
        {
          name: 'sweet potato',
          id: uuidv4(),
          image: require('./assets/fr&vs/040-sweet potato.png'),
        },
        {
          name: 'plum',
          id: uuidv4(),
          image: require('./assets/fr&vs/045-plum.png'),
        },
        {
          name: 'ginger',
          id: uuidv4(),
          image: require('./assets/fr&vs/046-ginger.png'),
        },
        {
          name: 'avocado',
          id: uuidv4(),
          image: require('./assets/fr&vs/049-avocado.png'),
        },
        {
          name: 'potato',
          id: uuidv4(),
          image: require('./assets/fr&vs/050-potato.png'),
        },
      ],
    },
    {
      name: 'dairy',
      image: require('./assets/dairy/index.png'),
      id: 4,
      items: [
        {
          name: 'milk',
          id: uuidv4(),
          image: require('./assets/dairy/bottle.png'),
        },
        {
          name: 'cheese',
          id: uuidv4(),
          image: require('./assets/dairy/cheese.png'),
        },
        {
          name: 'yogurt',
          id: uuidv4(),
          image: require('./assets/dairy/yogurt.png'),
        },
        {
          name: 'eggs',
          id: uuidv4(),
          image: require('./assets/dairy/egg.png'),
        },
      ],
    },
  ],
};

module.exports = db;

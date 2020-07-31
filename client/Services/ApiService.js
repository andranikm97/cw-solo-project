const BASE_URL = 'localhost:5001/';
const API_BASE_URL =
  'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=';
const API_HOST = 'edamam-food-and-grocery-database.p.rapidapi.com';
const API_KEY = 'ee86234462mshd09eba22e99b503p16b745jsn6c260c844dc5';

const ApiClient = {};

// ApiClient.getCategories = function () {
//   return fetchRequest('categories', {
//     method: 'GET',
//   });
// };

// function fetchRequest(path, options) {
//   return fetch(BASE_URL + path, options)
//     .then((res) => res)
//     .catch((err) => {
//       console.error(`${err}\nIn fetch request from ${path}\nAt ${BASE_URL}`);
//     });
// }

ApiClient.getIngredient = function (ingredient) {
  ingredient = ingredient.trim().replace(' ', '%20'); //replaces spaces for http request nomenclature
  return fetch(API_BASE_URL + ingredient, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY,
    },
  })
    .then((response) => response.json())
    .then(({ parsed, hints }) => {
      return {
        parsed,
        hints: filterHints(hints),
      };
    })
    .catch((err) => {
      console.log(err);
    });
};

const filterHints = (hints) => {
  const foodIds = [];

  const filteredHints = hints.filter((item) => {
    const foodId = item.food.foodId;
    if (foodIds.indexOf(foodId) === -1) {
      foodIds.push(foodId);
      return true;
    }
    return false;
  });

  return filteredHints;
};

export default ApiClient;

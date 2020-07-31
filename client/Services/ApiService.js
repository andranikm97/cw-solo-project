const API_BASE_URL = 'https://nutritionix-api.p.rapidapi.com/v1_1/search/';
const options =
  'fields=item_name%252Citem_id%252Cbrand_name%252Cnf_calories%252Cnf_total_fat';
const API_HOST = 'nutritionix-api.p.rapidapi.com';
const API_KEY = 'ee86234462mshd09eba22e99b503p16b745jsn6c260c844dc5';

const ApiClient = {};

ApiClient.getIngredient = function (ingredient) {
  // ingredient = ingredient.trim().replace(' ', '%2520'); //replaces spaces for http request nomenclature
  return fetch(
    'https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%2520cheese?fields=item_name%252Citem_id%252Cnf_calories',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    },
  )
    .then((response) => response.json())
    .then((item) => {
      console.log('Response:', item);
      return item;
    })
    .catch((err) => {
      console.log(err);
    });
};

// const filterHints = (hints) => {
//   const foodIds = [];

//   const filteredHints = hints.filter((item) => {
//     const foodId = item.food.foodId;
//     if (foodIds.indexOf(foodId) === -1) {
//       foodIds.push(foodId);
//       return true;
//     }
//     return false;
//   });

//   return filteredHints;
// };

export default ApiClient;

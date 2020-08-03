const API_BASE_URL =
  'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=';
const API_HOST = 'edamam-food-and-grocery-database.p.rapidapi.com';
const API_KEY = 'ee86234462mshd09eba22e99b503p16b745jsn6c260c844dc5';
const ApiClient = {};

const DB_BASE_URL = 'http://localhost:5001';

ApiClient.getProduct = function (product) {
  product = product.trim().replace(' ', '%20'); //replaces spaces for http request nomenclature
  return fetch(API_BASE_URL + product, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY,
    },
  })
    .then((response) => response.json())
    .then(async (item) => {
      const { parsed, text } = item;
      return { info: parsed[0].food, text };
    })
    .catch((err) => {
      console.log(err);
    });
};

ApiClient.submitLog = function (items) {
  console.log('Items before submission:', items);
  return true;
  // return fetch(DB_BASE_URL + '/logs', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(items),
  // });
};

ApiClient.getLogs = function (items) {
  return fetch(DB_BASE_URL + '/logs', {
    method: 'GET',
  });
};

export default ApiClient;

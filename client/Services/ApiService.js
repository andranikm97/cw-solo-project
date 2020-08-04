import envs from '../env';

const apiUrl = envs.API_BASE_URL;
const apiHost = envs.API_HOST;
const apiKey = envs.API_KEY;
const ApiClient = {};

const dbUrl = envs.DB_BASE_URL;

ApiClient.getProduct = function (product) {
  product = product.trim().replace(' ', '%20'); //replaces spaces for http request nomenclature
  return fetch(apiUrl + product, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': apiHost,
      'x-rapidapi-key': apiKey,
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
  return fetch(dbUrl + '/logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(items),
  });
};

ApiClient.getLogs = function (items) {
  return fetch(dbUrl + '/logs', {
    method: 'GET',
  });
};

export default ApiClient;

const axios = require('axios');

const apiSource = axios.create({
  baseURL: process.env.LEGITLINKS_API_ENDPOINT,
  timeout: process.env.LEGITLINKS_API_TIMEOUT,
  headers: { 'x-api-key': process.env.LEGITLINKS_API_KEY }
});

module.exports = {
  getLinkLocation: (url) => {
    return new Promise((resolve, reject) => {
      var encodedUrl = encodeURIComponent(url);

      apiSource.get(`api/v1/link/${encodedUrl}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

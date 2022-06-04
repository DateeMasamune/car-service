const axios = require('axios');

async function post(data, url) {
  const response = await axios.post(url, data);
  return response;
}

export default post;

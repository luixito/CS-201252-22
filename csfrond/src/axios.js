const axios = require('axios');
const url = "http://localhost:4000/api_v1/user/login";

axios.post(url)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

module.exports = axios;

import axios, { post } from 'axios';
const url = "http://localhost:4000/api_v1/user/login";

post(url)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

export default axios;

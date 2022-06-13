const axios = require('axios');

// const submitBtn = document.getElementById('submit');
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (ev) => {

  const response = axios.post('video');
  console.log('response', response);
  // ev.preventDefault(); // do not refresh page
})

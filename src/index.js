const axios = require('axios');

console.log('trf');
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', async function(ev) {
  ev.preventDefault(); // do not refresh page

  let formData = new FormData();
  [ ...this.elements ].reduce((videoData, inputEl) => {
    const isSubmitButton = !inputEl.name;
    if(isSubmitButton) return videoData;

    // TODO: Check if file is video file mp4
    formData.append(inputEl['name'], inputEl['value']);
    // videoData[inputEl['name']] = inputEl['value'];

    // unless, the file is in  document.getElementById('file').files[0]);
    // https://github.com/axios/axios/blob/c714cffa6c642e8e52bf1a3dfc91a63bef0f6a29/examples/upload/index.html#L27
    return videoData;
  }, {})

  // console.log(`Check if VIDEO DATA is there`, videoData);

  const config = { 
    headers: { 'content-type': 'multipart/form-data' },
   }

  const response = await axios.post('/video', formData, config);

  // const response = await axios.post('/video', {
  //   data: videoData // THIS ISSUE IS HERE
  // }, 
  // {
  //   onUploadProgress: function(progressEvent) {
  //     const progress = progressEvent.loaded/progressEvent.total;
  //     let percrentCompleted = Math.round(progress * 100);
  //   }
  // }
  // ).catch((err) => {
  //   console.error(err);
  // })
  // axios.progress

  console.log(response);
  console.log('gregtry');
})

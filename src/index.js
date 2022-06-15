const axios = require('axios');

console.log('tfrf');
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', async function(ev) {
  ev.preventDefault(); // do not refresh page

  const videoFile = document.getElementById('videoFileInput').files[0];
  console.log(videoFile);
  let formData = new FormData();
  formData.append('videoFile', videoFile);
  const response = axios.post('video', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
  console.log('response', response);
//   [ ...this.elements ].reduce((videoData, inputEl) => {
//     const isSubmitButton = !inputEl.name;
//     if(isSubmitButton) return videoData;

//     // TODO: Check if file is video file mp4
//     formData.append(inputEl['name'], inputEl['value']);
//     // videoData[inputEl['name']] = inputEl['value'];

//     // unless, the file is in  document.getElementById('file').files[0]);
//     // https://github.com/axios/axios/blob/c714cffa6c642e8e52bf1a3dfc91a63bef0f6a29/examples/upload/index.html#L27
//     return videoData;
//   }, {})

  // console.log(`Check if VIDEO DATA is there`, videoData);

  // const config = { 
  //   headers: { 'content-type': 'multipart/form-data' },
  //  }

  // const response = await axios.post('/video', formData);

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

  // console.log(response);
  // console.log('gregtry');
})

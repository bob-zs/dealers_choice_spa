const form = document.getElementsByTagName("form")[0];

console.log('dsfgafg');
form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const videoName = document.getElementById("videoName");
    const files = document.getElementById("files");
    const formData = new FormData();
    formData.append("videoName", videoName.value);
    for(let i =0; i < files.files.length; i++) {
            formData.append("files", files.files[i]);
    }
    fetch("/upload_files", {
        method: 'POST',
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // }
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
}
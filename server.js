const express = require("express");
const path = require('path');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));

app.get('/', (_, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.post("/upload_files", upload.single("files"), uploadFiles);
function uploadFiles(req, res) {
  console.log('Got here');
  console.log(req.body);
  console.log(req.file);
  res.json({ message: "Successfully uploaded files" });
}
app.listen(3000, () => {
    console.log(`Server started...`);
});

app.post("/upload_files", upload.array("files"), uploadFiles);
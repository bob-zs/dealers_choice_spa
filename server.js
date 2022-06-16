const express = require("express");
const { Video, User } = require('./db');
const path = require('path');
const multer = require("multer");

const storage = multer.diskStorage({
  filename: async function(req, file, cb) {
    try {
      const storedFileName = `${Date.now()}.mp4`;

      // videoRecord = await Video.create({
      //   name: req.body.videoName,
      //   path: `/uploads/${storedFileName}`
      // });
  


      // console.log("VideoRecord", videoRecord);
      cb(null, storedFileName);
    }
    catch (err) {
      console.log('STORAGE ERROR')
      console.error(err)
    }
  },
  destination: 'uploads/'
})

upload = multer({ storage: storage });



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));

app.get('/', async (_, res, next) => {
  try {
    const hannah = await User.create({ name: 'HANNAH' });
    res.sendFile(path.join(__dirname, 'index.html'));
  }
  catch (err) {
    console.error(err);
  }
})

const consoleThis = upload.single("files");


app.post("/upload_files", upload.single("files"), async (req, res, next) => {
  try {

    console.log('IN EXPRESS NOW');

  
    // const getLatestRecordQuery = {
    //   limit: 1,
    //   order: [ [ 'createdAt', 'DESC' ]]
    // };
    // const videoSaved = Video.findAll(getLatestRecordQuery)
    // res.send(`Saved ${videoSaved.name} at path ${videoSaved.name}`);
    res.send('working on it');
  }
  catch (err) {
    // res.send(err);
    console.log('ERROR HERE');
    console.error(err);
    next(err);
  }
});
function uploadFiles(req, res) {
  console.log('Got here');
  console.log(req.body);
  console.log(req.file);
  res.json({ message: "Successfully uploaded files" });
}


app.listen(3000, () => {
    console.log(`Server started...`);
});

// app.post("/upload_files", upload.array("files"), uploadFiles);
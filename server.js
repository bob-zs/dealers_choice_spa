const express = require('express');
const morgan = require('morgan');
const path = require('path');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(morgan('dev'));

app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/video', upload.single('video'), async (req, res, next) => {



  // do some database later
  const util = require('util');
  console.log(req);
  console.log(util.inspect(req.file));
  console.log(util.inspect(req.body));
  console.log(`FIELDs ${util.inspect(req.body)}`);
  console.log(util.inspect(req.files)); // is undefined
  // console.log(req.body);
  // console.log(req.files);
  console.log('HELO');
  // const util = require('util');
  // console.log(util.inspect(req));

  // const video = await Video.build({ name: '', path: '' });

  // res.send(req.body.toString());
  const statusCodeCreatedResource = 204;
  // res.status(statusCodeCreatedResource).send(req);
  res.send('hi');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on url http://localhost:${port}/`)) 
// print the url so dev can click the link on the terminal if possible

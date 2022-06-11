const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Go to http://localhost:3000/`)) // print the url so dev can click the link on the terminal if possible
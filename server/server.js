const PORT = process.env.PORT || 9000;
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

//this is for testing env variables before deployment
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use(express.static('client/build'))

mongoose.Promise = global.Promise;
console.log('hi', process.env.DATABASE);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

app.use(cors());

// Routes
const userRoutes = require('./routes/user');
const productsRoute = require('./routes/product');

app.use(userRoutes);
app.use(productsRoute);

// DEFAULT
if(process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log('Server running @ localhost:' + PORT);
}).on('error', (err) => {
  console.log('Server listen error, do you already have a serer running on PORT ' + PORT);
})
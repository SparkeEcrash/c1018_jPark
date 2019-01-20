const PORT = process.env.PORT || 9000;
const express = require('express');
const cookieParser = require('cookie-parser');
const formidable = require('express-formidable');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const async = require('async');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

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

app.listen(PORT, () => {
  console.log('Server running @ localhost:' + PORT);
}).on('error', (err) => {
  console.log('Server listen error, do you already have a serer running on PORT ' + PORT);
})
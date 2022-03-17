/* eslint-disable linebreak-style */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const path = require('path');

const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const billsRoutes = require('./routes/billsRoutes');
const accountsRoutes = require('./routes/accountsRoutes');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'src/views');

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// const staticPath = path.join(__dirname, 'assets');
// app.use(express.static(staticPath));

app.use('/', usersRoutes);
app.use('/auth', authRoutes);
app.use('/', billsRoutes);
app.use('/', accountsRoutes);

// app.get('/', (req, res) => {
//   const data = {
//     title: 'Homepage 1',
//     age: 25,
//     page: 'home',
//   };
//   res.render('index', data);
// });

// app.get('/about', (req, res) => {
//   const data = {
//     title: 'About us',
//     techArr: ['HTML', 'CSS', 'JS'],
//     jsFileName: 'main.js',
//     page: 'about',
//   };
//   res.render('about', data);
// });

// app.get('/contact', (req, res) => {
//   const data = {
//     title: 'Contact us',
//     page: 'contact',
//   };
//   res.render('contact', data);
// });

// app.all('*', (req, res) => {
//   // 404
//   const data = {
//     title: '404 not found',
//   };
//   res.render('404', data)
// });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

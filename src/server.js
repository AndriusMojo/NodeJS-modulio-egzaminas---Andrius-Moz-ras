/* eslint-disable linebreak-style */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const billsRoutes = require('./routes/billsRoutes');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', usersRoutes);
app.use('/auth', authRoutes);
app.use('/', billsRoutes);

app.all('*', (req, res) => {
  const data = {
    title: '404 not found',
  };
  res.render('404', data);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

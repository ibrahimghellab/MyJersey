const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const collectionRoutes = require('./routes/collection.routes')

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/collections', collectionRoutes)

module.exports = app;
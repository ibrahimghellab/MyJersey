const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const collectionRoutes = require('./routes/collection.routes')
const orderRoutes = require('./routes/order.routes')
const productRoutes = require('./routes/product.routes')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/collections', collectionRoutes);
app.use('/orders',orderRoutes);
app.use('/products',productRoutes)


module.exports = app;
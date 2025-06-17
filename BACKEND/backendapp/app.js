const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', authRoutes)
app.use('/api', reviewRoutes)
app.use('/api', productRoutes);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
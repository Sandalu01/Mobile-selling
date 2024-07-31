const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);


dotenv.config();


//edited fro chat gpt
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err.message);
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
//edited fro chat gpt

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

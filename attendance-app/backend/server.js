const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/attendance', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Sample route
app.get('/api/attendance', (req, res) => {
    res.send('Attendance API');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
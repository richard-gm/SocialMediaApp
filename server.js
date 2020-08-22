const express = require('express');
const connectDB = require('./config/db');
const app = express();


// Connecting DB
connectDB();
//
app.use(express.json({ extended: false }))
// some commend added ups 
app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/post', require('./routes/api/post'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))

 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


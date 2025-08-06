const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);


app.use(cors());
app.use(express.json());


const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
  res.send('FarmNest Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

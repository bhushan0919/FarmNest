const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  description: String,
  contact: String,
  image: String,
  category: String,
  createdBy: String, // user ID or role
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);

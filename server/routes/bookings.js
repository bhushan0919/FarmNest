const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST: Create a new booking
router.post('/', async (req, res) => {
  try {
    const { productId, farmerId, hotelId, quantity, message } = req.body;

    const newBooking = new Booking({
      productId,
      farmerId,
      hotelId,
      quantity,
      message
    });

    await newBooking.save();
    res.status(201).json({ success: true, message: 'Booking successful', booking: newBooking });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ success: false, message: 'Booking failed' });
  }
});

// GET: Fetch all bookings for a farmer
router.get('/farmer/:farmerId', async (req, res) => {
  try {
    const bookings = await Booking.find({ farmerId: req.params.farmerId }).populate('productId hotelId');
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings for farmer:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET: Fetch all bookings for a hotel (order history)
router.get('/hotel/:hotelId', async (req, res) => {
  try {
    const bookings = await Booking.find({ hotelId: req.params.hotelId }).populate('productId farmerId');
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings for hotel:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

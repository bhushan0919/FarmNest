const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { productId, farmerId, hotelId, quantity, message } = req.body;

    if (!productId || !farmerId || !hotelId || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const booking = new Booking({
      productId,
      farmerId,
      hotelId,
      quantity,
      message
    });

    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all bookings for a specific farmer
exports.getBookingsForFarmer = async (req, res) => {
  try {
    const { farmerId } = req.params;
    const bookings = await Booking.find({ farmerId }).populate('productId hotelId');
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching farmer bookings:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all bookings for a specific hotel
exports.getBookingsForHotel = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const bookings = await Booking.find({ hotelId }).populate('productId farmerId');
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching hotel bookings:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

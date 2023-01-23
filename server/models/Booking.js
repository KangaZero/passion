
const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookingSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  // https://mongoosejs.com/docs/tutorials/dates.html Doc about type: Date
  bookedDate: {
    type: String,
    min: Date.now()
  },
  bookedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
   belongsTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
  price: {
    type: Number,
    default: 100,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  additionalNotes: {
    type: String,
    required: false,
    trim: true
  },
});

bookingSchema.methods.getBookedDate = () => {
  return bookingSchema.BookedDate
};

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

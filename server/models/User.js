const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const { truncateSync } = require('fs');
const Booking = require('./Booking');
const Instrument = require('./Instrument');
const Post = require('./Post');
const Comment = require('./Comment');
const Friend = require('./Friend');

  const userSchema = new Schema({
  userName:{
    type: String,
    required: true,
    trim: true,
    match: [/^(?=[a-zA-Z0-9._]{5,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/, "Must be between 5 to 15 characters, and no '.' and '_'!"]
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  middleName: {
    type: String,
    required: false,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  address: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
    default: 3001
  },
  profilePicture: {
    type: String,
    required: false,
    default:"https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"
  },
  coverPicture: {
    type: String,
    required: false,
  },
  aboutMe: {
    type: String,
    required: false,
    default: `I am a new User`
  },
  // Add fav composers, pieces, etc
  favourites: {
    type: Map,
    of: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
    default: 'student'
  },
  friends: [Friend.schema],
  posts: [Post.schema],
  comments: [Comment.schema],
  instruments: [Instrument.schema],
  bookings: [Booking.schema],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

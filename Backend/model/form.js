// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields automatically
});

const User = mongoose.model('users', userSchema);

export default User;

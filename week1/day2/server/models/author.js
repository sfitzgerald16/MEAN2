const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
    minlength: [2, 'Authors name must be longer than 2 characters'],
    // match: [/[a-z]/i, 'No numbers in Author name'],
    // this is a better regexp for blocking numbers from author name
    match: [/[^0-9]/g, 'No numbers in Author name'],
    trim: true,
    unique: true
  },
  age: {
    type: Number,
    required: [true, 'Author age is required']
  },
  isAlive: {
    type: Boolean,
    default: true
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
});

module.exports = mongoose.model('Author', authorSchema);

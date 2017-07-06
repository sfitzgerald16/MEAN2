const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  pageCount: Number,
  year: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
});

mongoose.model('Book', bookSchema);

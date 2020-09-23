import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
  id:  String, // String is shorthand for {type: String}
  name: String,
  description: String 
});

mongoose.model('users', User);
import mongoose, { Schema } from 'mongoose';

let todoSchema = new Schema({
  text: {
    type: String ,
    required: true ,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
  }
});

const Todo = mongoose.model('Todo' , todoSchema);

export default Todo;

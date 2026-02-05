import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  reason: String,
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  estimatedBudget: Number
});

export default mongoose.model('Destination', destinationSchema);

import mongoose from 'mongoose';

const scanResultSchema = new mongoose.Schema({
  scanId: {
    type: String,
    required: true,
    unique: true,
  },
  totalWords: {
    type: Number,
    required: true,
  },
  identicalWords: {
    type: Number,
    required: true,
  },
  minorChangedWords: {
    type: Number,
    required: true,
  },
  relatedMeaningWords: {
    type: Number,
    required: true,
  },
  aggregatedScore: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ScanResult || mongoose.model('ScanResult', scanResultSchema);

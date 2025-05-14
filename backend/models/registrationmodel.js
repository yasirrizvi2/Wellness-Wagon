const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true
  },
  participant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  participated: {
    type: Boolean,
    default: false
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
}, { timestamps: true });

registrationSchema.index({ activity: 1, participant: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);

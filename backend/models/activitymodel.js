const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
},
  description: String,
  date: {
    type: Date,
    required: true
},
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);

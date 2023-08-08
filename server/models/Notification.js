import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  content: { 
    type: String, 
    required: true
   },
  timestamp: { 
    type: Date, 
    default: Date.now
   },
  status: {
       type: String,
       enum: ['unread', 'read'],
       required: true
    }
});


export default mongoose.model('Notification', notificationSchema);


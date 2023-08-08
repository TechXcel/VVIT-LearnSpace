import mongoose from 'mongoose';


const discussionSchema = new mongoose.Schema({
  userId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  title: { 
    type: String,
    required: true
   },
  content: { 
    type: String, 
    required: true 
  },
  status: { 
     type: String,
     enum: ['pending', 'resolved'],
     required: true 
    },
  timestamp: { 
    type: Date,
    default: Date.now
    
  },
  replies: [
    {
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
      }
    }
  ]
});

export default mongoose.model('Discussion', discussionSchema);


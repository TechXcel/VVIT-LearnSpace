import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  uploader: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User',
     required: true
   },
  title: { 
       type: String,
       required: true
     },
  description: { 
      type: String,
      required: true 
    },
  subject: { 
    type: String,
    required: true
             },
  type: { 
    type: String,
     enum: ['lecture notes', 'assignment', 'previous paper', 'project'], 
     required: true 
    },
  fileUrl: {
     type: String, 
    required: true
   },
  ratings: [
    { 
      userId: {
        type: mongoose.Schema.Types.ObjectId, 
         ref: 'User' 
      },
      rating: Number 
    }
  ],
  reviews: [
     {
       userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
       }, 
       text: String 
      }
    ],
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    required: true
   },
  categories: [String],
  tags: [String],
  timestamp: {
     type: Date, 
     default: Date.now 
    }
});


export default mongoose.model('Resource', resourceSchema);



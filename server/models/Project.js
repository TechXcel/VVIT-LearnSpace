import mongoose from 'mongoose';


const projectSchema = new mongoose.Schema({
  userId: { 
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
  tags: [String],
  files: [String],
  timestamp: {
     type: Date, 
     default: Date.now
   }
});


export default mongoose.model('Project', projectSchema);

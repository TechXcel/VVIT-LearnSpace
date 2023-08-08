import mongoose from "mongoose";


const approvalRequestSchema = new mongoose.Schema({
  resourceId: { 
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Resource',
     required: true
     },
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'User', 
     required: true
   },
  type: { 
    type: String, 
    enum: ['resourceUpload', 'discussionPost'], 
    required: true
   },
  status: { 
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      required: true
   },
  timestamp: { 
    type: Date, 
    default: Date.now
   }
});

export default mongoose.model('ApprovalRequest', approvalRequestSchema);

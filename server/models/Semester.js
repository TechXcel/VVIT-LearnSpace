import mongoose from 'mongoose';

const semesterSchema = new mongoose.Schema({
  name: { 
     type: String,
     required: true
   }
});

export default mongoose.model('Semester', semesterSchema);

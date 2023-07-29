import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: String,
  rating : Number,
  date: { type: Date, default: Date.now }
});

const SkillModel = mongoose.model('Skill', SkillSchema);
export default SkillModel;
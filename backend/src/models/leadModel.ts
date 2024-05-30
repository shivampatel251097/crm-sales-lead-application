import mongoose, { Document, Schema } from 'mongoose';

interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string,
  source: string;
  status: string;
  address: string;
  createdAt: Date;
}

const leadSchema: Schema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String},
  email: { type: String, required: true, unique:true },
  phone: { type: String },
  category: {type:String},
  source: {type:String},
  status: {type:String},
  address: {type:String},
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ILead>('Lead', leadSchema);

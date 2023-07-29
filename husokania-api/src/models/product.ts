import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//const {ObjectId }= mongoose.Types;

const ProductSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

const ProductModel = mongoose.model('Product', ProductSchema);
export default ProductModel;
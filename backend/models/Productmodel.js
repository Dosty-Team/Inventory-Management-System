
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  productName: String,
  productID: Number,
  qty: Number,
  category: String,
  inStock: Boolean,
  costPrice: Number,
  sellingPrice: Number,
  addedDate: String,
});

 
module.exports  = mongoose.model("Products",productSchema);
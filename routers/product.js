const express = require('express');
const app = express();
const Product = require("../models/Productmodel");
let fordatacount; // Consider moving this into a shared module or using a database for better data sharing
const Category = require("../models/CategoryModel");
const mongoose = require('mongoose');
const sequenceSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 }
});

// Create the Sequence model
const Sequence = mongoose.model('Sequence', sequenceSchema);

app.get('/productin', async (req, res) => {
  try {
  
    const products = await Product.find();
    const totalProducts = products.length;
    const totalCost = products.reduce((acc, product) => acc + product.costPrice, 0);

    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const totalCategories = uniqueCategories.length;
    const productOverview = [
      {
        value: totalCategories,
        attribute: 'Category'
      },
      {
        value: totalProducts,
        attribute: 'Total Products'
      },
      {
        value: totalCost,
        attribute: 'Total Cost'
      }
      // Add more attributes as needed
    ];

    console.log("products",products);
    return res.status(200).json({ message: "Accessing by the Admin user successful", products,productOverview});
   
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// app.post('/addProduct', async (req, res) => {
//   const newProduct = req.body;

 
//   try {
//       // Find the maximum key value in the existing categories
//       const maxKeyDocument = await Product.findOne().sort({ key: -1 }).select('key');
//   const minKeyDocument = await Product.findOne().sort({ key: 1 }).select('key');
  
//   // Extract the key values or default to 0 if documents are null
//   const maxKey = maxKeyDocument ? maxKeyDocument.key : 0;
//   const minKey = minKeyDocument ? minKeyDocument.key : 0;
  
//   // Function to find a unique key between the min and max keys
//   const findUniqueKey = async (min, max) => {
//  ``   for (let i = min + 1; i <= max; i++) {
//       const existingProduct = await Product.findOne({ key: i });
//       if (!existingProduct) {
//         return i;
//       }
//     }
//     return null;
//   };
  
//   // Generate a new key by finding a unique key between the min and max keys or use maxKey + 1
//   const newKey = await findUniqueKey(minKey, maxKey) || maxKey + 1;
//       const productInstance  = new Product({
//         key: newKey,
//         ...newProduct,
//       });
  
//        await productInstance.save();
  
//       return res.status(200).json({ message: 'Product  insertion successful', success: true });
//     } catch (error) {
//       console.error('Error adding product:', error.message);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }});
app.post('/addProduct', async (req, res) => {
  const newProduct = req.body;

  try {
    // Find the next available key using a sequence collection
    const sequenceDoc = await Sequence.findOneAndUpdate(
      { _id: "productKey" },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );
    const newKey = sequenceDoc.sequence_value;

    // Create a new product instance
    const productInstance = new Product({
      key: newKey,
      ...newProduct
    });

    // Save the product instance
    await productInstance.save();

    return res.status(200).json({ message: 'Product insertion successful', success: true });
  } catch (error) {
    console.error('Error adding product:', error.message);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
app.delete('/deleteProduct/:key', async (req, res) => {
  try {
    const { key } = req.params;

    // Find the product by key in the database and delete it
    const deletedProduct = await Product.findOneAndDelete({ key });

    // If the product is not found, return a 404 Not Found response
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Respond with a success message
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.put('/updateProduct/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const { productName } = req.body;

    // Find the product by key in the database
    const product = await Product.findOne({ key });

    // If the product is not found, return a 404 Not Found response
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Update the product's name
    product.productName = productName;

    // Save the updated product to the database
    await product.save();

    res.status(200).json({ success: true, message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get('/getcats', async (req, res) => {
  try {
    const allCategory = await Category.find();
    const CateInfo = {
      totalCategory: allCategory.length,
      activeCategory: fordatacount ? allCategory.filter(category => category.category === fordatacount.category).length : 0,
    };
    console.log("userINFO", CateInfo);
    return res.status(200).json({ message: "Accessing the category collection successful", CateInfo, allCategory });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error while accessing the category collection" });
  }
});

app.delete('/deleteCategory/:key', async (req, res) => {
  try {
    const keyToDelete = req.params.key;

    // Check if the category exists
    const existingCategory = await Category.findOne({ key: keyToDelete });

    if (!existingCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Delete the category
    await Category.deleteOne({ key: keyToDelete });

    // Fetch updated data after deletion
    const allCategory = await Category.find();
    const CateInfo = {
      totalCategory: allCategory.length,
      activeCategory: fordatacount
        ? allCategory.filter((category) => category.category === fordatacount.category).length
        : 0,
    };

    return res.status(200).json({
      message: 'Category deleted successfully',
      CateInfo,
      allCategory,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error while deleting the category' });
  }
});

app.put('/updateCategory/:key', async (req, res) => {
  try {
    const keyToUpdate = req.params.key;
    const { category, products } = req.body;

    // Check if the category exists
    const existingCategory = await Category.findOne({ key: keyToUpdate });

    if (!existingCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Update the category
    await Category.updateOne({ key: keyToUpdate }, { category, products });

    // Fetch updated data after updating
    const allCategory = await Category.find();
    const CateInfo = {
      totalCategory: allCategory.length,
      activeCategory: fordatacount
        ? allCategory.filter((category) => category.category === fordatacount.category).length
        : 0,
    };

    return res.status(200).json({
      message: 'Category updated successfully',
      CateInfo,
      allCategory,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error while updating the category' });
  }
});
module.exports = app;

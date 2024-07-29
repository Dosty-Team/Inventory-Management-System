const express = require('express');
const app = express();
const Sale = require("../models/salesmodel");
let fordatacount; // Consider moving this into a shared module or using a database for better data sharing
 
const mongoose = require('mongoose');
const salesSequenceSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  salesSequence_value: { type: Number, default: 0 }
});

// Create the salesSequence model
const salesSequence = mongoose.model('salesSequence', salesSequenceSchema);

app.get('/salesin', async (req, res) => {
  try {
  
    const Sales = await Sale.find();
   
   
    console.log("Sales",Sales);
    return res.status(200).json({ message: "Accessing by the Admin user successful", Sales});
   
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/addSale', async (req, res) => {
  const newSale = req.body;

  try {
    // Find the next available key using a salesSequence collection
    const salesSequenceDoc = await salesSequence.findOneAndUpdate(
      { _id: "SaleKey" },
      { $inc: { salesSequence_value: 1 } },
      { new: true, upsert: true }
    );
    const newKey = salesSequenceDoc.salesSequence_value;

    // Create a new Sale instance
    const SaleInstance = new Sale({
      key: newKey,
      ...newSale
    });

    // Save the Sale instance
    await SaleInstance.save();

    return res.status(200).json({ message: 'Sale insertion successful', success: true });
  } catch (error) {
    console.error('Error adding Sale:', error.message);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
app.delete('/deleteSale/:key', async (req, res) => {
  try {
    const { key } = req.params;

    // Find the Sale by key in the database and delete it
    const deletedSale = await Sale.findOneAndDelete({ key });

    // If the Sale is not found, return a 404 Not Found response
    if (!deletedSale) {
      return res.status(404).json({ success: false, message: 'Sale not found' });
    }

    // Respond with a success message
    res.status(200).json({ success: true, message: 'Sale deleted successfully' });
  } catch (error) {
    console.error('Error deleting Sale:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.put('/updateSale/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const { SaleName } = req.body;

    // Find the Sale by key in the database
    const Sale = await Sale.findOne({ key });

    // If the Sale is not found, return a 404 Not Found response
    if (!Sale) {
      return res.status(404).json({ success: false, message: 'Sale not found' });
    }

    // Update the Sale's name
    Sale.SaleName = SaleName;

    // Save the updated Sale to the database
    await Sale.save();

    res.status(200).json({ success: true, message: 'Sale updated successfully' });
  } catch (error) {
    console.error('Error updating Sale:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
 
module.exports = app;

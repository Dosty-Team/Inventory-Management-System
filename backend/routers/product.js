const express = require('express');
const app = express();
 const Product = require("../models/Productmodel");


app.post('/productin', async (req, res) => {
  try {
  
    const products = await Product.find();
    // Process the data to create userInfo
    // const userInfo = {
    //     totalUsers: allUsers.length,
    //     adminCount: allUsers.filter(user => user.role === "Admin").length,
    //     normalCount: allUsers.filter(user => user.role === "Normal").length,
    // };
    console.log("products",products);
    return res.status(200).json({ message: "Accessing by the Admin user successful", products});
   
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;


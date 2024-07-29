const { default: Product } = require("../../frontend/ims/src/components/products");
const newProduct = req.body;

 
try {
    // Find the maximum key value in the existing categories
    const maxKeyDocument = await Product.findOne().sort({ key: -1 }).select('key');
const minKeyDocument = await Product.findOne().sort({ key: 1 }).select('key');

// Extract the key values or default to 0 if documents are null
const maxKey = maxKeyDocument ? maxKeyDocument.key : 0;
const minKey = minKeyDocument ? minKeyDocument.key : 0;

// Function to find a unique key between the min and max keys
const findUniqueKey = async (min, max) => {
  for (let i = min + 1; i <= max; i++) {
    const existingProduct = await Product.findOne({ key: i });
    if (!existingProduct) {
      return i;
    }
  }
  return null;
};

// Generate a new key by finding a unique key between the min and max keys or use maxKey + 1
const newKey = await findUniqueKey(minKey, maxKey) || maxKey + 1;
    const Product = new Product({
      key: newKey,
      newProduct,
    });

     await Product.save();

    return res.status(200).json({ message: 'Product  insertion successful', success: true });
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
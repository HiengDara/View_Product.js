const express = require('express');
const connectDB = require('./dbconnect.js'); // Import the database connection function
const Product = require('./schema.js'); // Ensure this is correctly pointing to your Product model file

const app = express();
const port = 5005; // Change this to the required port

// Route to view all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products", error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Import Mongoose package
const mongoose = require('mongoose');

// MongoDB Connection URL (Replace with your actual credentials)
const MONGO_URI = "mongodb+srv://admin:admin@cloudnative.uan94.mongodb.net/Cloud_Midterm?retryWrites=true&w=majority&appName=CloudNative";

// Establish connection to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ Successfully connected to MongoDB");
    })
    .catch((err) => {
        console.error("❌ Error connecting to MongoDB:", err.message);
        process.exit(1); // Exit process if connection fails
    });

// Export Mongoose instance for use in other files
module.exports = mongoose;
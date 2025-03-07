const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        product_name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        category: { type: String, required: true },
        description: { type: String },
    },
    {
        timestamps: true 
    } 
);

module.exports = mongoose.model('Products', productSchema);

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
})

module.exports = mongoose.model('Product', productSchema)
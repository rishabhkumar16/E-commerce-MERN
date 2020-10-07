const mongoose = require("mongoose");
// const product = require("./product");

const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});

const orderSchema = new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id: {},
    amount: {type:Number},
    address: String,
    status: {
        type: String,
        default: "Received",
        enum: ["Cancelled","Delivered","Shipepd","Processing","Received"]
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
},{timestamps:true});

const Order = mongoose.model("Order",orderSchema)
const ProductCart = mongoose.model("ProductCart", ProductCartSchema)

module.exports = {Order, ProductCart};
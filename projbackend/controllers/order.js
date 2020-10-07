const {Order, ProductCart} = require("../models/order");

exports.getOrderById = (req, res, next, id) => {
    Order.findById(id).populate("products.product", "name price").exec((err, order) => {
        if (err){
            return res.status(400).json({
                error: "No Order Found in DB"
            });
        }
        req.order = order;
        next();
    });
};
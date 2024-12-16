const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdersSchema); //order will be final collection name in our database with pural (ex. orders)

module.exports = { OrdersModel };

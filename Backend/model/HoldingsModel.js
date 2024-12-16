const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema); //holding will be final collection name in our database with pural (ex. holdings)

module.exports = { HoldingsModel };

const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema); //position will be final collection name in our database with pural (ex. positions)

module.exports = { PositionsModel };

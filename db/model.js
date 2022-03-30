let mongoose = require("mongoose");
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect("mongodb://127.0.0.1:27017/friends-cast", mongooseConfig);

// Import character JSON file
let characters = require("./characters.json");

//Import model
let Character = mongoose.model(
  "Character",
  new mongoose.Schema({
    character: { type: String },
    portrayedBy: { type: String },
    image: { type: String },
    birthYear: { type: Number },
  })
);

module.exports = { Character };

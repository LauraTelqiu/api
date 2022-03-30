let mongoose = require("mongoose");
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect("mongodb://127.0.0.1:27017/friends-cast", mongooseConfig);

let Character = require("./model");
let characters = require("./characters.json");

Character.deleteMany({})
  .then(() => Character.create(characters))
  .then((characters) => console.log("Done"))
  .catch((error) => console.error(error));

module.exports = { Character };

let mongoose = require("mongoose");
let mongooseConfig = { useUnifiedTopology: true };

mongoose.connect("mongodb://127.0.0.1:27017/friends", mongooseConfig);

// Import friends JSON file
let episodes = require("./friends.json");

//Import model
let episode = mongoose.model(
  "episode",
  new mongoose.Schema({
    Year_of_prod: { type: Number },
    Season: { type: Number },
    Episode_Title: { type: String },
    Duration: { type: Number },
    Summary: { type: String },
    Director: { type: String },
    Stars: { type: Number },
  })
);

// Seed
episode
  .deleteMany({})
  .then(() => episode.create(episodes))
  .then((episodes) => console.log("Done"))
  .catch((error) => console.error(error));

module.exports = { episode };

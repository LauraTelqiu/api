let { episode } = require("./index");

// Import Express
let express = require("express");
const { request } = require("express");
const { response } = require("express");

// Make a new Express App
let app = express();

// Express app handle JSON in HTTP requests
app.use(express.json());

//Create
app.post("/episode", async (request, response) => {
  let newepisode = request.body;
  let created = await episode.create(newepisode);
  response.send(created);
});

// Read All
app.get("/episode", async (request, response) => {
  let episodes = await episode.find({});
  response.send(episodes);
});

// Read Specific episode by id
app.get("/episode/:id", async (request, response) => {
  let id = request.params.id;
  console.log(episode);
  let selectedEpisode = await episode.findById(id);
  console.log(episode);
  response.send(selectedEpisode);
});

//Update
app.put("/episode/:id", async (request, response) => {
  let id = request.params.id;
  let updatedEpisode = request.body;
  let updated = await episode.findByIdAndUpdate(id, updatedEpisode);
  response.send(updated);
});

//Delete
app.delete("/episode/:id", async (request, response) => {
  let id = request.params.id;
  await episode.findByIdAndRemove(id);
  response.send({ message: "deleted" });
});

// Set our port number to 9000
const PORT = 9000;
// Start our server
app.listen(PORT, () => {
  console.log("listening");
});

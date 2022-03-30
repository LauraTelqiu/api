let { Character } = require("../db/model");

// Import Express
let express = require("express");
const { request, response } = require("express");

// Make a new Express App
let app = express();

// Express app handle JSON in HTTP requests
app.use(express.json());

// Create
app.post("/character", (request, response) => {
  Character.create(request.body).then((character) => {
    response.json(character);
  });
});

//Redirect to the Characters route.
app.get("/character/:id", async (request, response) => {
  let id = request.params.id;
  let character = await Character.findById(id);
  response.send(character);
});

// Read Specific Character by id
app.get("/character/:id", async (request, response) => {
  let id = request.params.id;
  let character = await Character.findById(id);
  response.send(character);
});

// Read All Characters
app.get("/character", async (request, response) => {
  let characters = await Character.find({});
  response.send(characters);
});

//Update
app.post("/character", async (request, response) => {
  let newCharacter = request.body;
  let created = await Character.create(newCharacter);
  response.send(created);
});

//Delete
app.delete("/character", async (request, response) => {
  await Character.deleteMany({});
  response.send({ message: "deleted" });
});

// Set our port number to 9000
const PORT = 9000;
// Start our server
app.listen(PORT, () => {
  console.log("listening");
});

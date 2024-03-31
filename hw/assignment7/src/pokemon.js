const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

const name = "Mingyi Gao";

console.log(`My name is ${name}`);

// use this list as your temporary database!
// note that it will reset every time you restart your server
const myPokemon = [
  {
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58",
    name: "Pikachu",
    health: 10,
    level: 1,
  },
];

router.get("/", function (req, res) {
  // return all pokemon
  res.send(myPokemon);
});

router.post("/", (req, res) => {
  // if the pokemon name already exists in the list, return an error
  // randomly generate an id using UUID ["uuid()"]
  // randomly generate a level between 1 and 10, inclusive, if none is given
  // randomly generate a health between 10 and 100, inclusive, if none is given
  // insert your pokemon into the myPokemon list
  // return a 200
  console.log("Before adding:", myPokemon);
  console.log("req.body:", req.body);
  const reqBody = req.body;
  if (myPokemon.find((p) => p.name === reqBody.name)) {
    return res.status(409).send("A Pokémon with this name already exists.");
  }
  const level = reqBody.level || Math.floor(Math.random() * 10) + 1;
  const health = reqBody.health || Math.floor(Math.random() * 91) + 10;
  const newPokemon = {
    id: uuid(),
    name: reqBody.name,
    health: health,
    level: level,
  };
  myPokemon.push(newPokemon);
  console.log("After adding:", myPokemon);
  res.status(200).send(newPokemon);
});

router.get("/:pokemonId", function (req, res) {
  // return pokemon if one is found matching the pokemonId
  // return a 404 if no pokemon matches that pokemonId

  const pokemonId = req.params.pokemonId;
  const pokemon = myPokemon.find((p) => p.id === pokemonId);
  if (pokemon) {
    res.send(pokemon);
  } else {
    res.status(404).send();
  }
});

router.put("/:pokemonId", function (req, res) {
  // update the pokemon matching the pokemonId
  // based on the req body
  // return a 404 if no pokemon matches that pokemonId
  console.log("req.body:", req.body);
  const pokemonId = req.params.pokemonId;
  const pokemonIndex = myPokemon.findIndex((p) => p.id === pokemonId);

  if (pokemonIndex === -1) {
    return res.status(404).send("No Pokémon with the given ID was found.");
  }

  const { name, health, level } = req.body;
  const updatedPokemon = {
    ...myPokemon[pokemonIndex],
    ...(name && { name }),
    ...(health && { health }),
    ...(level && { level }),
  };
  myPokemon[pokemonIndex] = updatedPokemon;
  res.send(updatedPokemon);
});

router.delete("/:pokemonId", function (req, res) {
  // delete pokemon if pokemonId matches the id of one
  // return 200 even if no pokemon matches that Id
  const { pokemonId } = req.params;
  const remainingPokemon = myPokemon.filter((p) => p.id !== pokemonId);

  if (myPokemon.length === remainingPokemon.length) {
    return res.status(200).send("No Pokémon with the given ID was found");
  } else {
    myPokemon.length = 0; // Clear the array
    myPokemon.push(...remainingPokemon);
  }

  res.status(200).send("The Pokémon has been deleted.");
});

module.exports = router;

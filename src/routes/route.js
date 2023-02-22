const express = require("express");
const router = express.Router();
const CharactersController = require("../controllers/CharactersController")

router
  .get("/Character", CharactersController.getCharacterList)
  .post("/newCharacter", CharactersController.postNewCharacter)
  .put("/CharacterId/:id", CharactersController.putCharacterId)
  .delete("/RemoveCharacter/:id", CharactersController.deleteRemoveCharacter)


module.exports = router;
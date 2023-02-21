const express = require("express");
const router = express.Router();
const CharactersController = require("../controllers/CharactersController")

router
  .get("/Character", CharactersController.getCharacterList)
  .post("/newCharacter", CharactersController.postNewCharacter)
  .put("/Character/:id", CharactersController.putCharacterId)
  .delete("/RemoveCharacter", CharactersController.deleteRemoveCharacter)


module.exports = router;
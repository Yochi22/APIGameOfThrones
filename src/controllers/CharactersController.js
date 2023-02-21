const Character = require("../model/GoTModel")


exports.getCharacterList = ((req, res) => { 
  Character.find((err, result) => {   
      if(err) throw new Error(err);
      res.json(result);  
  });
});

exports.postNewCharacter = ((req, res) => {
  Character.create(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

exports.deleteRemoveCharacter = ((req, res) => {
  Character.deleteOne(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

exports.putCharacterId = ((req, res) => {
  Character.findOneAndDelete(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});



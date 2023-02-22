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
  Character.findOneAndDelete({id:req.body.id},{
    name: req.body.name,
    gender: req.body.gender,
    title: req.body.title,
    family: req.body.family,
}, (err)=>{
    if (!err) {
        res.send('personaje eliminado correctamente')
    } else {
        res.send(err)
    }
})
})

exports.putCharacterId = ((req, res) => {
  Character.findOneAndUpdate({id:req.body.id},{
    name: req.body.name,
    gender: req.body.gender,
    title: req.body.title,
    family: req.body.family,
}, (err)=>{
    if (!err) {
        res.send('personaje actualizado correctamente')
    } else {
        res.send(err)
    }
})
})
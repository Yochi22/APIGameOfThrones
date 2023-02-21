const mongoose=require("mongoose");

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    title: { type: String, required: true },
    family: { type: String, required: true },

  });
  
  const Character = mongoose.model('Character', characterSchema);
  
  module.exports = Character;
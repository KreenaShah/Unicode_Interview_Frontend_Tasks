const express = require('express');
const app = express();
const axios = require('axios');
const mongoose=require("mongoose");

// Creates connection ++ creating a db (CharacterDB) if it does not exist
mongoose.connect("mongodb://localhost:27017/CharacterDB" ,{useNewUrlParser:true ,useUnifiedTopology: true})
.then( () => console.log("Connection successful"))
.catch((err) => console.log(err));

// Schema => mongoose schema defines structure of document , we can also add default values , validators etc etc
// Object or instance => camelCase
const characterSchema = new mongoose.Schema({
  id: { type: Number, unique: true , required:true},
  name: String,
  birthday: String,
  occupation: Array,
  img: String,
  status: String,
  nickname: String,
  appearance: Array,
  portrayed: String,
  category: Array
})

//Mongoose model is a wrapper on mongoose schema
// It provides an interface to database for creating , updating , querying , deleting records , etc
// Class => PascalCase
const Character = new mongoose.model("FavouriteCharacter", characterSchema);

//creating table(SQL) OR creating collections(MongoDb)
app.post("/", async (req, res) => {
  try {
    const response = await axios.get("https://breakingbadapi.com/api/characters");
    const favCharData =
      response.data.find(obj => obj.name === "Saul Goodman");
    const favChar = new Character(favCharData);
    const data = await favChar.save();
    res.json(data);
  }
  catch (error) {
    res.json({
      message: "Error",
      error,
    });
  }
})

app.get("/", async (req, res) => {
  try {
    const favChar = await Character.find({});
    res.json({ favChar });
  }
  catch (error) {
    res.json({
      message: "Error",
      error,
    });
  }
});

app.listen(3000,()=>{
  console.log("Server Started on port 3000")
});
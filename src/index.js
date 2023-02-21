const express = require("express");
const mongoose = require("mongoose");

const PORT = 3030;
const app = express();

const Routes = require("../src/routes/route");

const connectionOptions =
{
  useUnifiedTopology: true,
  useNewUrlParser: true
};


app.use(express.json());


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://yochi22:Marcador22@cluster0.jzbl6wm.mongodb.net/apigot", connectionOptions)
  .then(() => console.log("Conexion a MongoDB"))
  .catch((err) => console.error(err));

app.use("/app", Routes);


app.listen(PORT, () => { console.log("server is listenin on port 3030")});
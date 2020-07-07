const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const trips = require('./routes/api/trips');
const Trip = require('./models/Trip')

const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use("/api/trips",trips);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

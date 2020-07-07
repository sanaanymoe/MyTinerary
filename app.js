const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const trips = require('./routes/api/trips');
const Trip = require('./models/Trip');
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  // const trip = new Trip({
  //   flight: {
  //     startLocation: "Paris",
  //     endLocation: "Kansas"
  //   },

  //   housing: {
  //     price: "$500",
  //   },

  //   event: {
  //     location: "sewer",
  //     price: "#300"
  //   }

  // })

  // trip.save();
  res.send("hello")

});
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/trips",trips);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

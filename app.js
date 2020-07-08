// import hotel from './frontend/utils/api/flightHotelApi'
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const trips = require('./routes/api/trips');
const users = require("./routes/api/users")
const trips = require('./routes/api/trips');
const User = require('./models/User');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/trips", trips);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  const user = new User({
    username: "mo",
    email: "moe@gmail.com",
    password: "moe123456",
  });
  user.save();
  res.send("Hello MERN");
});

app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



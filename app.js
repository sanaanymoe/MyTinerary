// import hotel from './frontend/utils/api/flightHotelApi'
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users")
const User = require('./models/User');
const bodyParser = require('body-parser');
const path = require('path');
const trips = require('./routes/api/trips');
const passport = require('passport');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/trips", trips);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  // const user = new User({
  //   username: "mo",
  //   email: "moe@gmail.com",
  //   password: "moe123456",
  // });
  // user.save();
  res.send("Hello MERN");
});

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api/trips",trips);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));



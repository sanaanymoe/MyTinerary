const express = require('express');
const router = express.Router();
const passport = require('passport');

const Trip =require('../../models/Trip');
const validateTripInput = require('../../validation/trips');
const trips = require('../../validation/trips');

router.get("/test", (req, res) => {
    res.json({msg: "This is trip route"});
});

router.get('/', (req, res) => {
    Trip.find()
        .then(trips => res.json(trips))
        .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));
});

router.get('/user/:user_id', (req, res) => {
    Trip.find({user: req.params.user_id})
        .then(trips => res.json(trips))
        .catch(err =>
            res.status(404).json({ notripsfound: 'No trips found for that user' }
        )
    );
});

router.post("/newtrip", 
    passport.authenticate("jwt", {session: false}),
    (req, res) => {

        // console.log(req.body)
      const { errors, isValid } = validateTripInput(req.body);
        debugger
      if (!isValid) {
          debugger
        return res.status(400).json(errors);
      }

        const newTrip =  new Trip({
            user: req.user.id,
            title: req.body.title,
            flight: req.body.flight,
            housing: req.body.housing,
            event: req.body.event
        })
        debugger
    
    newTrip.save()
        .then(trip => {
            debugger 
            res.json(trip)})
 })



module.exports = router;
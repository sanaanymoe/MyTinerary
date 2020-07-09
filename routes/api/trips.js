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

router.post("/", 
    passport.authenticate("jwt", {session: false}),
    (req, res) => {


      const { errors, isValid } = validateTripInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }

        const newTrip = new Trip({
            flight: req.body.flight,
            housing: req.body.housing,
            event: req.body.event
        })
    
    newTrip.save()
        .then(trip => res.json(trip))
 })



module.exports = router;
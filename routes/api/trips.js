const express = require('express');
const router = express.Router();
const passport = require('passport');

const Trip =require('../../models/Trip');
const validateTripInput = require('../../validation/trips')

router.get("/test", (req, res) => {
    res.json({msg: "This is trip route"});
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
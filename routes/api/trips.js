const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require("axios")
const keys = require('../../config/keys_dev')

const Trip = require('../../models/Trip');
const validateTripInput = require('../../validation/trips');
const trips = require('../../validation/trips');


router.get("/test", (req, res) => {
    res.json({ msg: "This is trip route" });
});

router.get('/', (req, res) => {
    Trip.find()
        .then(trips => res.json(trips))
        .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));
});

router.get('/trips/:trip_id', (req, res) => {
    Trip.find({ trip: req.params.trip_id })
        .then(trips => res.json(trips))
        .catch(err => res.status(404).json({ notripsfound: 'No trips found' }));
});

router.get('/user/:user_id', (req, res) => {
    Trip.find({ user: req.params.user_id })
        .then(trips => res.json(trips))
        .catch(err =>
            res.status(404).json({ notripsfound: 'No trips found for that user' }
            )
        );
});

router.post("/newtrip",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTripInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }



        const getGeo = async (req) => {
            // let x = null; 
            let x = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req}&key=${keys.geoAPI}`)
            return x.data.results[0].geometry.location
        }

        const getHousing = async (location) => {
            let hotel = await axios({
                "method": "GET",
                "url": `https://yelp-com.p.rapidapi.com/search/nearby/${location.lat}/${location.lng}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "api-host": "yelp-com.p.rapidapi.com",
                    "x-rapidapi-key": `${keys.rapidAPI}`,
                    "useQueryString": true
                }, "params": {
                    "offset": "0",
                    "radius": "5",
                    "term": "hotels"
                }
            }
            )
            return hotel.data.business_search_results[0].business.name;
        }

        const getEvent = async (location) => {
            let event = await axios({
                "method": "GET",
                "url": `https://yelp-com.p.rapidapi.com/search/nearby/${location.lat}/${location.lng}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "api-host": "yelp-com.p.rapidapi.com",
                    "x-rapidapi-key": `${keys.rapidAPI}`,
                    "useQueryString": true
                }, "params": {
                    "offset": "0",
                    "radius": "5",
                    "term": "events"
                }
            }
            )
            return event.data.business_search_results[0].business.name;
        }

        const creatorFunc = async () => {
            let location = await getGeo(`${req.body.flight.endLocation}`)
            let hotel = await getHousing(location)
            let event = await getEvent(location)
            // console.log(hotel)
            // return hotel
            const newTrip = new Trip({
                user: req.user.id,
                //   geoLocation: payload.data.results[0].geometry.location, 
                title: req.body.title,
                flight: req.body.flight,
                housing: {
                    location: hotel,
                    startDate: req.body.flight.startDate,
                    endDate: req.body.flight.endDate
                },
                event: {
                    location: event,
                    date: Date.now()
                }
            })

            newTrip.save()
                .then(trip => {
                    // debugger 
                    res.json(trip)
                })
        }

        creatorFunc()

    })






module.exports = router;
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
            try {
            let x = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req}&key=${keys.geoAPI}`)
            return x.data.results[0].geometry.location
            } catch (e) {
                console.log(e);
                return undefined
            }
        }

        const getHousing = async (location) => {
            try {
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
            } catch (e) {
                console.log(e)
                return undefined
            }    
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

        const getAirport = async (city) => {
            let airports = await axios({
                "method": "GET",
                "url": "https://aerodatabox.p.rapidapi.com/airports/search/term",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                    "x-rapidapi-key": `${keys.rapidAPI}`,
                    "useQueryString": true
                }, "params": {
                    "limit": "10",
                    "q": `${city}`
                }
            })
            return airports.data.items[0].iata
        }

        const getFlight = async (depDate, retDate, arrCity, depCity) => {
            let airport = await getAirport(arrCity);
            
            try {
            let flights = await axios({
                "method": "GET",
                "url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/${airport}-sky/2020-09-01`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "x-rapidapi-key": `${keys.rapidAPI}`,
                    "useQueryString": true
                }, "params": {
                    "inboundpartialdate": ""
                }
            })
            return flights.data.Carriers[0].Name
            } catch (e) {
                console.log(e);
                return undefined
            }
        }

        const creatorFunc = async () => {
            let location = await getGeo(`${req.body.flight.endLocation}`)
            let hotel = await getHousing(location)
            let event = await getEvent(location)
            let carrier = await getFlight(req.body.flight.startDate, req.body.flight.endDate, req.body.flight.endLocation, req.body.flight.startLocation)
            // console.log(hotel)
            // return hotel
            const newTrip = new Trip({
                user: req.user.id,
                //   geoLocation: payload.data.results[0].geometry.location, 
                title: req.body.title,
                flight: {
                    startLocation: req.body.flight.startLocation,
                    endLocation: req.body.flight.endLocation,
                    startDate: req.body.flight.startDate,
                    endDate: req.body.flight.endDate,
                    carrier
                },
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
            // console.log(location, hotel, event)
            console.log(flight)
        }

        creatorFunc()

    })






module.exports = router;
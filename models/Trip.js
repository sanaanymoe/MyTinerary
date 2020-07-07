const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FlightSchema = new Schema(
    {
    startLocation: {
        type: String,
        // required: true
    },
    endLocation: {
        type: String,
        // required: true
    },

    startDate: {
        type: Date,
        default: Date.now()
        // required: true
    },

    endDate: {
        type: Date,
        default: Date.now()
        // required: true
    },

    price: {
        type: String,
        // required: true
    },

    bookingUrl: {
        type:String,
        // required: true
    } 

});

const HousingSchema = new Schema({
    location: {
        type: String,
        // required: true
    },

    price: {
        type: String,
        // required: true
    },

    startDate: {
        type: Date,
        default: Date.now()
        // required: true
    },

    endDate: {
        type: Date,
        default: Date.now()
        // required: true
    }

});

const EventSchema = new Schema({
    location: {
        type: String,
        // required: true
    },

    price: {
        type: String,
        // required: true
    },

    startDate: {
        type: Date,
        default: Date.now()
    },

    endDate: {
        type: Date,
        // required: true
        default: Date.now()
    }
})

const TripSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    // },
    // flight object
    flight: FlightSchema,
    housing: HousingSchema,
    event: EventSchema


})

const Trip = mongoose.model('trip', TripSchema);

module.exports = Trip;
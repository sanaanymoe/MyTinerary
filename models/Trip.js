const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    // flight object
    flight: {
        startLocation: {
            type: String,
            required: true
        },
        endLocation: {
            type: String,
            required: true
        },

        startDate: {
            type: Date,
            required: true
        },

        endDate: {
            type: Date,
            required: true
        },

        price: {
            type: String,
            required: true
        },

        bookingUrl: {
            type:String,
            required: true
        }

    },

    //housing object

    housing: {
        location: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },

        startDate: {
            type: Date,
            required: true
        },

        endDate: {
            type: Date,
            required: true
        }



    },

    event: {
        location: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },

        startDate: {
            type: Date,
            required: true
        },

        endDate: {
            type: Date,
            required: true
        }
    }


})

const Trip = mongoose.model('trip', TripSchema);

module.exports = Trip;
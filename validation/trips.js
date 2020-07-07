const Validator = require('validator');


module.exports = function validateTripInput(data) {
    let errors = {};

    if(!data.flight !== null) {
        errors.flight = 'No flight data inputed'
    }

    if( (data.housing) !== null) {
        errors.housing = 'No housing data inputed'
    }

    if( (data.event).length !== null) {
        errors.event = 'No event data inputed'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
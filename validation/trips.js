const Validator = require('validator');


module.exports = function validateTripInput(data) {
    let errors = {};
    debugger
    if( ( !Object.keys(data).includes("flight") ) ) {
        errors.flight = 'No flight data inputed'
    }

    if( ( !Object.keys(data).includes("housing") ) ) {
        errors.housing = 'No housing data inputed'
    }

    if( ( !Object.keys(data).includes("event") ) ) {
        errors.event = 'No event data inputed'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
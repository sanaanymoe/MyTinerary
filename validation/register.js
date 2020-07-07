const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "username must be between 2 and 30 chars";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "username can't be blank";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email can't be blank";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password can't be blank";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
    errors.password = "Password must be between 2 and 30 chars";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password = "Password must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

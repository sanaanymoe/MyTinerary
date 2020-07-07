const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function (data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    eroors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email can't be blank!";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password can't be blank!";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

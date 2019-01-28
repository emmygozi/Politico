import validator from "../helpers/Validators";

class ValidatePostRequest {
  static validateUserSignup(req, res, next) {
    const { 
        firstname,
        lastname,
        othername,
        email,
        phoneNumber,
        passportUrl,
        password,
        confirmpass
    } = req.body;

    if (
      firstname == null ||
      firstname.length === 0 ||
      validator.hasWhiteSpace(firstname)
    ) {
      return res.status(400).send({
        status: 400,
        message: "Firstname field cannot be empty"
      });
    }
    if (validator.validateInputLength(firstname, 4, 70) === false) {
      return res.status(400).send({
        status: 400,
        message:
          "Firstname should have a minimum of 4 and maximum of 70 characters"
      });
    }

    if (
      lastname == null ||
      lastname.length === 0 ||
      validator.hasWhiteSpace(lastname)
    ) {
      return res.status(400).send({
        status: 400,
        message: "Lastname field cannot be empty"
      });
    }
    if (validator.validateInputLength(lastname, 4, 70) === false) {
      return res.status(400).send({
        status: 400,
        message:
          "Lastname should have a minimum of 4 and maximum of 70 characters"
      });
    }

    if (
        othername == null ||
        othername.length === 0 ||
        validator.hasWhiteSpace(othername)
        ) {
      return res.status(400).send({
        status: 400,
        message: "lastname field cannot be empty"
      });
    }

    if (validator.validateInputLength(othername, 4, 70) === false) {
      return res.status(400).send({
        status: 400,
        message:
          "Othername should have a minimum of 4 and maximum of 70 characters"
      });
    }

    if (
        email == null  ||
        email.length === 0 ||
        validator.hasWhiteSpace(email)
        ) {
      return res.status(400).send({
        status: 400,
        message: "Email field cannot be empty"
      });
    }
    if (validator.emailValidator(email) === false) {
      return res.status(400).send({
        status: 400,
        message: "Incorrect mail format"
      });
    }
    if (validator.validateInputLength(email, 7, 70) === false) {
      return res.status(400).send({
        status: 400,
        message: "Email should have a minimum of 7 and maximum of 70 characters"
      });
    }
    if (phoneNumber == null || phoneNumber.length === 0 || validator.hasWhiteSpace(phoneNumber)) {
      return res.status(400).send({
        status: 400,
        message: "Phone field cannot be empty"
      });
    }
    if (isNaN(phoneNumber)) {
      return res.status(400).send({
        status: 400,
        message: "Phone Number must be an integer"
      });
    }
    if (validator.validateInputLength(phoneNumber, 9, 15) === false) {
      return res.status(400).send({
        status: 400,
        message: "Phone Number should have a minimum of 9 and maximum of 15 characters"
      });
    }
    if (
      passportUrl == null ||
      passportUrl.length === 0 ||
      validator.hasWhiteSpace(passportUrl)
    ) {
      return res.status(400).send({
        status: 400,
        message: "Passport URL field must be provided"
      });
    }

    if (validator.validateInputLength(passportUrl, 8, 200) === false) {
        return res.status(400).send({
          status: 400,
          message: "Passport URL should have a minimum of 8 and maximum of 200 characters"
        });
    }

    if (
      password == null ||
      password.length === 0 ||
      validator.hasWhiteSpace(password)
    ) {
      return res.status(400).send({
        status: 400,
        message: "Password field must be provided"
      });
    }
    if (
        confirmpass == null ||
        confirmpass.length === 0 ||
      validator.hasWhiteSpace(confirmpass)
    ) {
      return res.status(400).send({
        status: 400,
        message: "Confirm Password field must be provided"
      });
    }
    if (validator.validateInputLength(password, 6, 30) === false) {
      return res.status(400).send({
        status: 400,
        message: "Password should have a minimum of 6 and maximum of 30 characters"
      });
    }
    if (password !== confirmpass) {
      return res.status(400).send({
        status: 400,
        message: "Passwords mismatch"
      });
    }
    next();
  }
}

export default ValidatePostRequest;

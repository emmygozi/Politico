import validator from '../helpers/Validators';

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

    if (Object.keys(req.body).length > 8) {
      return res.status(400).send({
        status: 400,
        error: 'No additional field allowed'
      });
    }

    if (
      firstname == null
      || firstname.length === 0
      || validator.hasWhiteSpace(firstname)
      || typeof (firstname) === 'boolean'
    ) {
      return res.status(400).send({
        status: 400,
        error: 'Firstname field cannot be empty or contain invalid entry'
      });
    }
    if (validator.validateInputLength(firstname, 3, 70) === false) {
      return res.status(400).send({
        status: 400,
        error: 'Firstname should have a minimum of 3 and maximum of 70 characters'
      });
    }

    if (lastname.length === 0 || validator.hasWhiteSpace(lastname) || typeof (firstname) === 'boolean') {
      return res.status(400).send({
        status: 400,
        error: 'Lastname field cannot be empty or contain invalid entry'
      });
    }
    if (validator.validateInputLength(lastname, 3, 70) === false || confirmpass == null) {
      return res.status(400).send({
        status: 400,
        error:
          'Lastname should have a minimum of 3 and maximum of 70 characters'
      });
    }

    if (
      othername == null
        || othername.length === 0
        || validator.hasWhiteSpace(othername) || typeof (firstname) === 'boolean'
    ) {
      return res.status(400).send({
        status: 400,
        error: 'lastname field cannot be empty or contain invalid entry'
      });
    }

    if (validator.validateInputLength(othername, 3, 70) === false) {
      return res.status(400).send({
        status: 400,
        error:
          'Othername should have a minimum of 3 and maximum of 70 characters'
      });
    }

    if (
      email == null || email.length === 0
        || validator.hasWhiteSpace(email)
        || typeof (email) === 'boolean'
    ) {
      return res.status(400).send({
        status: 400,
        error: 'Email field cannot be empty'
      });
    }
    if (validator.emailValidator(email) === false) {
      return res.status(400).send({
        status: 400,
        error: 'Incorrect mail format'
      });
    }
    if (validator.validateInputLength(email, 8, 70) === false || typeof (firstname) === 'boolean') {
      return res.status(400).send({
        status: 400,
        error: 'Email should have a minimum of 8 and maximum of 70 characters'
      });
    }
    if (phoneNumber == null || phoneNumber.length === 0 || validator.hasWhiteSpace(phoneNumber)) {
      return res.status(400).send({
        status: 400,
        error: 'Phone field cannot be empty'
      });
    }
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(phoneNumber) || typeof (firstname) === 'boolean') {
      return res.status(400).send({
        status: 400,
        error: 'Phone Number must be an integer'
      });
    }
    if (validator.validateInputLength(phoneNumber, 9, 15) === false) {
      return res.status(400).send({
        status: 400,
        error: 'Phone Number should have a minimum of 9 and maximum of 15 characters'
      });
    }
    if (
      passportUrl == null
      || passportUrl.length === 0
      || validator.hasWhiteSpace(passportUrl) || typeof (firstname) === 'boolean'
    ) {
      return res.status(400).send({
        status: 400,
        error: 'Passport URL field must be provided'
      });
    }

    if (validator.validateInputLength(passportUrl, 8, 200) === false) {
      return res.status(400).send({
        status: 400,
        error: 'Passport URL should have a minimum of 8 and maximum of 200 characters'
      });
    }

    if (
      password == null || typeof (firstname) === 'boolean'
      || password.length === 0
      || validator.hasWhiteSpace(password)
    ) {
      return res.status(400).send({
        status: 400,
        error: 'Password field must be provided'
      });
    }
    if (confirmpass.length === 0 || typeof (confirmpass) === 'boolean' || confirmpass == null
      || validator.hasWhiteSpace(confirmpass)) {
      return res.status(400).send({
        status: 400,
        error: 'Confirm Password field must be provided'
      });
    }
    if (validator.validateInputLength(password, 6, 30) === false) {
      return res.status(400).send({
        status: 400,
        error: 'Password should have a minimum of 6 and maximum of 30 characters'
      });
    }

    if (password !== confirmpass) {
      return res.status(400).send({
        status: 400,
        error: 'Passwords mismatch'
      });
    }
    next();
  }
}

export default ValidatePostRequest;

import validator from '../helpers/Validators';

const validateLogin = (req, res, next) => {
  let { email, password } = req.body;

  if (Object.keys(req.body).length > 2 || Object.keys(req.body).length < 2) {
    return res.status(400).send({
      status: 400,
      error: 'Two fields are required'
    });
  }
  email = email.trim();
  password = password.trim();

  if (
    email == null || email.length === 0
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
  if (
    password == null || typeof (firstname) === 'boolean'
        || password.length === 0
  ) {
    return res.status(400).send({
      status: 400,
      error: 'Password field must be provided'
    });
  }
  if (validator.validateInputLength(password, 6, 30) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Password should have a minimum of 6 and maximum of 30 characters'
    });
  }

  req.body.email = email;
  req.body.password = password;
  next();
};

export default validateLogin;

import validator from '../helpers/Validators';

const validateEmail = (req, res, next) => {
  let { email } = req.body;

  if (Object.keys(req.body).length > 1 || Object.keys(req.body).length < 1) {
    return res.status(400).send({
      status: 400,
      error: 'Email fields are required'
    });
  }
  email = email.trim();
  email = email.toLowerCase();

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
  req.body.email = email;
  next();
};

export default validateEmail;

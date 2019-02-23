import validator from '../helpers/Validators';

const validateEmail = (req, res, next) => {
  let { email, resetpassword, token } = req.body;

  if (email == null || email === undefined || email.length === 0 || typeof email === 'boolean') {
    return res.status(400).send({
      status: 400,
      error: 'Email field cannot be empty'
    });
  }
  if (
    resetpassword == null
    || !resetpassword
    || resetpassword.length === 0
    || validator.hasWhiteSpace(resetpassword)
    || typeof (resetpassword) === 'boolean'
  ) {
    return res.status(400).send({
      status: 400,
      error: 'resetpassword field cannot be empty or contain invalid entry'
    });
  }
  if (
    token == null
    || !token
    || token.length === 0
    || validator.hasWhiteSpace(token)
    || typeof (token) === 'boolean'
  ) {
    return res.status(400).send({
      status: 400,
      error: 'Token field cannot be empty or contain invalid entry'
    });
  }


  email = email.trim();
  email = email.toLowerCase();
  resetpassword = resetpassword.trim();
  token = token.trim();


  if (validator.emailValidator(email) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Incorrect mail format'
    });
  }

  req.body.email = email;
  req.body.resetpassword = resetpassword;
  req.body.token = token;
  next();
};

export default validateEmail;

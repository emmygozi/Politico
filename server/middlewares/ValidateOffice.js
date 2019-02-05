import validator from '../helpers/Validators';

const validateOffice = (req, res, next) => {
  const {
    name, type
  } = req.body;

  if (
    name == null
    || name.length === 0
    || validator.hasWhiteSpace(name)
    || typeof (name) === 'boolean'
  ) {
    return res.status(400).send({
      status: 400,
      error: 'Name field cannot be empty or contain invalid entry'
    });
  }
  if (validator.validateInputLength(name, 3, 70) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Name should have a minimum of 3 and maximum of 70 characters'
    });
  }
  if (
    type == null
    || type.length === 0
    || validator.hasWhiteSpace(type)
    || typeof (type) === 'boolean'
  ) {
    return res.status(400).send({
      status: 400,
      error: 'Office type address field cannot be empty or contain invalid entry'
    });
  }
  if (validator.validateInputLength(type, 3, 70) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Office type address should have a minimum of 3 and maximum of 70 characters'
    });
  }

  next();
};

export default validateOffice;

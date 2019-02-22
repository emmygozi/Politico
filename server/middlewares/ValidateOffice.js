import validator from '../helpers/Validators';

const validateOffice = (req, res, next) => {
  let {
    name, type
  } = req.body;

  if (Object.keys(req.body).length > 2 || Object.keys(req.body).length < 2) {
    return res.status(400).send({
      status: 400,
      error: 'Two fields are required'
    });
  }

  name = name.trim();
  type = type.trim();

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

  if (type === 'Federal' || type === 'State' || type === 'Legislative' || type === 'Local') {
    // eslint-disable-next-line no-unused-vars
    const myValue = true;
  } else {
    return res.status(400).send({
      status: 400,
      error: 'Must be of type; Federal, State, Legislative or Local'
    });
  }
  req.body.name = name;
  req.body.type = type;

  next();
};

export default validateOffice;

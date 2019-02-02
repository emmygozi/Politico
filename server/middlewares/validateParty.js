
import validator from '../helpers/Validators';

const validateParty = (req, res, next) => {
  const {
    name, hqAddress, logoUrl
  } = req.body;

  if (Object.keys(req.body).length > 3) {
    return res.status(400).send({
      status: 400,
      error: 'No additional field'
    });
  }
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
    hqAddress == null
    || hqAddress.length === 0
    || validator.hasWhiteSpace(hqAddress)
    || typeof (hqAddress) === 'boolean'
  ) {
    return res.status(400).send({
      status: 400,
      error: 'Headquaters address field cannot be empty or contain invalid entry'
    });
  }
  if (validator.validateInputLength(hqAddress, 3, 70) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Headquaters address should have a minimum of 3 and maximum of 70 characters'
    });
  }
  if (
    logoUrl == null
    || logoUrl.length === 0
    || validator.hasWhiteSpace(logoUrl)
    || typeof (logoUrl) === 'boolean'
  ) {
    return res.status(400).send({
      status: 400,
      error: 'Logo URL field cannot be empty or contain invalid entry'
    });
  }
  if (validator.validateInputLength(logoUrl, 3, 70) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Logo URL should have a minimum of 3 and maximum of 70 characters'
    });
  }

  next();
};

export default validateParty;

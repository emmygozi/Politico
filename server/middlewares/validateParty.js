
import validator from '../helpers/Validators';

const validateParty = (req, res, next) => {
  let {
    name, hqAddress, logoUrl
  } = req.body;

  if (Object.keys(req.body).length > 3 || Object.keys(req.body).length < 3) {
    return res.status(400).send({
      status: 400,
      error: 'Three fields are required'
    });
  }

  name = name.trim();
  hqAddress = name.trim();
  logoUrl = logoUrl.trim();

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
  if (validator.validateInputLength(hqAddress, 3, 300) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Headquaters address should have a minimum of 3 and maximum of 300 characters'
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
  if (validator.validateInputLength(logoUrl, 3, 100) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Logo URL should have a minimum of 3 and maximum of 100 characters'
    });
  }
  req.body.name = name;
  req.body.hqAddress = hqAddress;
  req.body.logoUrl = logoUrl;

  next();
};

const validatePartyName = (req, res, next) => {
  let { name } = req.body;

  if (Object.keys(req.body).length > 1 || Object.keys(req.body).length < 1) {
    return res.status(400).send({
      status: 400,
      error: 'A single field - name is required'
    });
  }

  name = name.trim();

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

  req.body.name = name;
  next();
};

export {
  validateParty,
  validatePartyName
};

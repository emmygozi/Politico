import validator from '../helpers/Validators';

const petitionOffice = (req, res, next) => {
  let {
    body,
  } = req.body;
  const { office } = req.body;

  if (
    body == null
    || body === undefined
    || body.length === 0
    || typeof (body) === 'boolean'
  ) {
    return res.status(400).send({
      status: 400,
      error: 'Body field cannot be empty or contain invalid entry'
    });
  }
  body = body.trim();

  if (validator.validateInputLength(body, 10, 500) === false) {
    return res.status(400).send({
      status: 400,
      error: 'Petition text should have a minimum of 10 and maximum of 500 characters'
    });
  }
  if ((Number(office) !== parseInt(office, 10))
  || (Math.sign(office) === -1)) {
    return res.status(400).json({ status: 400, error: 'Office ID cannot be empty or invalid' });
  }

  req.body.body = body;
  req.body.office = office;
  next();
};

export default petitionOffice;

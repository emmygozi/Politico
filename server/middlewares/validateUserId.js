
const validatePartyId = (req, res, next) => {
  if ((Number(req.params.id) !== parseInt(req.params.id, 10))
        || (Math.sign(req.params.id) === -1)) {
    return res.status(400).json({ status: 400, error: 'Party ID is not valid' });
  }
  next();
};

const validateOfficeId = (req, res, next) => {
  if ((Number(req.params.id) !== parseInt(req.params.id, 10))
        || (Math.sign(req.params.id) === -1)) {
    return res.status(400).json({ status: 400, error: 'Office ID is not valid' });
  }
  next();
};

const validateUserId = (req, res, next) => {
  if ((Number(req.params.id) !== parseInt(req.params.id, 10))
        || (Math.sign(req.params.id) === -1)) {
    return res.status(400).json({ status: 400, error: 'User ID is not valid' });
  }
  next();
};


export { validatePartyId, validateOfficeId, validateUserId };

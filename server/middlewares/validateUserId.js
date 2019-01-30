
const validateUserId = (req, res, next) => {
  if ((Number(req.params.id) !== parseInt(req.params.id, 10))
        || (Math.sign(req.params.id) === -1)) {
    return res.status(400).json({ status: 400, error: 'Given ID is not valid' });
  }
  next();
};


export default validateUserId;

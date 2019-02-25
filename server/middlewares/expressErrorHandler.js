// eslint-disable-next-line
export default (err, req, res, next) => {
  res.status(500).json({ status: 500, error: 'Something failed in your application' });
};

/* eslint no-unused-vars: off */

const errorHandler = (err, req, res, next) => {
  console.log(`Error ====> ${err.message}`.red.inverse);
  res.status(500).json({
    code: 500,
    data: 'Server error',
  });
};

const notFound = (req, res) => {
  console.log(`Not Found ====> ${req.OriginalUrl}`.blue.inverse);
  res.status(404).json({
    code: 404,
    data: 'The requested route does not exist on this server',
  });
};

module.exports = { errorHandler, notFound };

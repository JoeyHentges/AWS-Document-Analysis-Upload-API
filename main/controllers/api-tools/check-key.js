require('dotenv').config();

// Check the key
module.exports.checkKey = async (req, res, next) => {
  console.log(req.query);
  if (req.query.key !== process.env.API_KEY) {
    res.send('invalid key');
    return false;
  }
  next();
};

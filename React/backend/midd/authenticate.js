const jwt = require("jsonwebtoken");

const userVerify = async (token) => {
  return jwt.verify(token, "Alojomora");
};

module.exports.authenticate = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization;
      let verifyed = await userVerify(token);
      if (verifyed) {
        return next();
      }
    } else {
      res.status(500).json({ error: "No token" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

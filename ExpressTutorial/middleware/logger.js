const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    `${req.protocole}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;

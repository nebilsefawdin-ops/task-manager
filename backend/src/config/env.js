const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  APP_NAME: process.env.APP_NAME,
};

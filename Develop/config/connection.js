require('dotenv').config();

const Sequelize = require('sequelize');

/* JawsDB as seen in prior student mini project - add-on that provides functional MySQL server
 if you are deploying application to Heroku. Was provided as starter code but not needed for
 video walkthrough */

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

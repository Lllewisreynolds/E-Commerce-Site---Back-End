const express = require('express');
const routes = require('./routes');
// import sequelize connection
// Also holding the configuration and connection details for database 

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

/* sync sequelize models to the database using below method, then turn on the server 
using promise - only after database is synced does it start the express application
ensures database schema is up-to-date before handling any requests */ 

// Using force: false option to instruct Sequelize only to alter existing tables if there are differences

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
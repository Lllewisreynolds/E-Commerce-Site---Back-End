# E-Commerce Site - Back-End

  ## Description

This backend application is meant to function as and emulate a Stock Management System solution for maintaining an E-Commerce company's stock levels and availability through the use of Node.js, MySQL database, and the Sequelize ORM.  

Databases are foundational to full-stack web applications. This week's assignment builds upon our previous studies (the starter code of a working Express.js API, schema and seed data for a MySQL database) to add another element to our stack: ORM (Object Relational Mapping). ORM provides us a means by which to bridge our prior knowledge and competency in object-orientating coding (predominately JavaScript) and implement it in connection with relational databases. MySQL is the most popular SQL database available - the fact that it is still so widely adopted despite being over four decades old speaks to its enduring usefulness, and the promise-based ORM tool we are using here is Sequelize, allowing us to abstract away our previously used and arguably more arduous direct interactions with MySQL in favour of a greater ease of use when it comes to implementing our database synchronisation, associations, queries and CRUD operations more generally.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
  * [Licence](#licence)
  * [Installation](#installation)
  * [Video Walkthrough](#video-walkthrough)
  * [Questions](#questions)
  
## License

This application has the following licence:

MIT License

[Link to licence](https://opensource.org/licenses/MIT)

## Installation
    
  Follow the following steps to properly install this application:


  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

  * Your next step is to initialize a project by creating a package.json file that will keep track of libraries installed for use in your application by adding the installed package's name and version. This is achieved by typing the following in the command line:

```bash
npm init -y
```

MySQL must be downloaded and installed also.
You can download the installer directly from the [MySQL website](https://dev.mysql.com/downloads/installer). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install mysql
```
Proficiency with the MySQL command line prompt is encouraged, but GUI's such as MySQL Workbench can also be used to provide access to the database (I personally used TablePlus during the creation of my application). 

This command line application makes use of several dependencies:

  * To install these packages, run the following commands from within the CLI at the root of the application:

```bash
npm i
```

We will then connect our Node.js servers to our MySQL databases to perform queries based on client requests and return responses accordingly.

You will need to create a `.env` file in your root directory. This will store your configuration details for accessing MySQL such as database name and login information. Example as follows:

```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PASSWORD='YOUR PASSWORD'
```

Prior to starting the server, we need to create our database and its seeded data with the following commands:

Run `mysql -u root -p` from the command linr and enter your MySQL password when prompted if you have one to access MySQL. 
Create the E-Commerce database with command `source db/schema.sql`. 
You can log out ofthe MySQL shell with `\q`.
Seed database with `npm run seed` as notated in the "scripts" section of the `package.json` file.


  * And finally: 

  Please type the following command within the terminal to invoke the application:

```bash
npm start
```
You can then access the API routes using the likes of Insomnia application or alternatively, the Thunder Client extension from within VS Code if you prefer. The video walkthrough below details the endpoints used for our CRUD operations along with the JSON body formats for each of the database models used. 

## Video Walkthrough

[Link to video walkthrough of API routes' endpoints / CRUD operations being used with E-Commerce Back-End ](https://drive.google.com/file/d/1nlBbcRBsEbeafl8E5FNiLevvL-jrJZC0/view)

      
## Questions
      
  For further questions:

  If you have any further questions or feedback at this time regarding the repo or application, my contact info can be found as below.
  
  Contact Info:

  GitHub: [Lllewisreynolds](https://github.com/Lllewisreynolds)

  Email: [lsreynolds108@gmail.com](mailto:lsreynolds108@gmail.com)
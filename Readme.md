# Crud-Express-Sequelize

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Irenaeus-XVI/Crud-Express-Sequelize/blob/master/LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2012-brightgreen)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/express-%5E4.17.1-yellow)](https://www.npmjs.com/package/express)
[![Sequelize Version](https://img.shields.io/badge/sequelize-%5E6.6.5-lightgrey)](https://www.npmjs.com/package/sequelize)

Crud-Express-Sequelize is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, and Sequelize. It provides a basic HTTP interface to interact with a PostgreSQL, MySQL, SQLite, or MSSQL database (supported by Sequelize) and perform CRUD operations on the data.

## Features

- Create new users and notes
- Read existing users and notes
- Update existing users and notes
- Delete users and notes
- Sequelize integration with multiple database options
- RESTful API design
- Easy to use and extend

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Clone this repository: `git clone https://github.com/Irenaeus-XVI/Crud-Express-Sequelize.git`
3. Navigate to the project directory: `cd Crud-Express-Sequelize`
4. Install the dependencies: `npm install`

## Database Configuration

1. Choose the database option you want to use (PostgreSQL, MySQL, SQLite, or MSSQL).
2. Make sure you have the respective database installed and running.
3. Configure the database connection in `dbConnection.js`.

## Usage

1. Start the server: `npm start`
2. The API will be accessible at: `http://localhost:3000`

## API Endpoints

### Users

- `POST /users` - Sign up (Create a new user)
- `GET /users/login` - Sign in (Get user information for login)
- `PUT /users/updateUser` - Update user (Update user information)
- `DELETE /users/deleteUser` - Delete user (Delete a user)
- `GET /users/searchUsersByNameAndAge` - Search users by name and age (Users whose names start with "a" and age is less than 30)
- `GET /users/searchBetween` - Search users by age range (Users whose age is between 20 and 30)
- `GET /users/getThreeOldestUser` - Get the 3 oldest users (Users with the highest age)
- `GET /users/listOfIds` - Search users by list of IDs (Users with IDs specified in the query)
- `GET /users` - Get all users (Retrieve all users)

### Notes

- `POST /notes/addNote` - Add note (Create a new note)
- `DELETE /notes/deleteNote` - Delete note (Delete a note, note creator only)
- `PUT /notes/updateNote` - Update note (Update a note, note owner only)
- `GET /notes` - Get all notes (Retrieve all notes)
- `GET /notes/getAllNotesOwners` - Get all notes with owners' information (Retrieve all notes and their owners' details)

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](https://github.com/Irenaeus-XVI/Crud-Express-Sequelize/blob/master/LICENSE).

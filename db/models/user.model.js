import { DataTypes } from "sequelize"
import connection from "../dbConnection.js"

export const userSchema = connection.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(50),
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
    },
    password: {
        type: DataTypes.STRING(50),
    },
    age: {
        type: DataTypes.INTEGER
    }
});

connection.sync();
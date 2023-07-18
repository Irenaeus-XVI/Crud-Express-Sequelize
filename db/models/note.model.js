import { DataTypes, Sequelize } from "sequelize";
import connection from "../dbConnection.js";
import { userSchema } from "./user.model.js";



const notesSchema = connection.define("note", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true

    },
    content: {
        type: DataTypes.STRING(50),
        allowNull: false,

    },

    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }
})


notesSchema.belongsTo(userSchema, { foreignKey: 'userID', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

export default notesSchema; 
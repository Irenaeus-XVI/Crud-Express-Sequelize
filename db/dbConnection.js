import { Sequelize } from 'sequelize'



const connection = new Sequelize("ROUTE-ASSIGNMENT-4-SEQUELIZE", "root", "", {
    host: "localhost",
    dialect: 'mysql'
})


export default connection;
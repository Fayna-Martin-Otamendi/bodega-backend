const { Sequelize } = require('sequelize')

require('dotenv').config();

console.log(process.env.MYSQLUSER, process.env.MYSQLPASSWORD, process.env.MYSQLHOST, process.env.MYSQLPORT, process.env.MYSQLDATABASE)
const connection = new Sequelize(`mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`)

const checkConnection = async () => {
    try {
      await connection.authenticate()
      console.log('Connected to DB')
    } catch (error) {
      throw error
    }
  }

  const syncModels = async () => {
    try {
        await connection.sync({alter: false})
        console.log("Models Synched")
    } catch (error) {
        throw error
        console.log("El error está en la función Sync Models")
    }
}

module.exports = {
    connection,
    checkConnection,
    syncModels
}
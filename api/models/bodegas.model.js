const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Bodega = connection.define('bodega', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      require: true
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    id_owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },    
  },{
    timestamps: false
  })

  module.exports = Bodega

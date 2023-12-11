const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Reserva = connection.define('reserva', {
    id_usuario: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      require: true
    },
    id_tour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true,
    },
    personas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true
    },    
  },{
    timestamps: false
  })

  module.exports = Reserva
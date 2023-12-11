const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Tour = connection.define('tour', {
    franja_horaria: {
      type: DataTypes.TIME,
      unique: true,
      allowNull: false,
      require: true
    },
    max_personas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true,
    },
    reservado_personas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true
    }, 
    id_bodega: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true
      }, 
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        require: true
      },       
  },{
    timestamps: false
  })

  module.exports = Tour
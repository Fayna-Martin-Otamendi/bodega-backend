const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Calificacion = connection.define('calificacion', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true
    },
    id_vino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true,
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true
    },   
    creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        require: true
      },
    comentarios: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      }, 
  },{
    timestamps: false
  })

  module.exports = Calificacion
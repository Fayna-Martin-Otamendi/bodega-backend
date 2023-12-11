const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Pedido = connection.define('pedido', {
    id_usuario: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },   
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    direccion_envio: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
  },{
    timestamps: false
  })

  module.exports = Pedido
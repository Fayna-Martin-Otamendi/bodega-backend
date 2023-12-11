const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Detalle_pedido = connection.define('detalle_pedido', {
  
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true
    },   
    precio_unidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true
      },
  },{
    timestamps: false
  })

  module.exports = Detalle_pedido
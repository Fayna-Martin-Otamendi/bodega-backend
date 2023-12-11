const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Detalle_pedido = connection.define('detalle_pedido', {
    id_pedido: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      require: true
    },
    id_vino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true,
    },
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
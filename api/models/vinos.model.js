const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Vino = connection.define('vino', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      require: true
    },
    year: {
      type: DataTypes.DATE,
      allowNull: false,
      require: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    }, 
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      }, 
      precio_unidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true
      }, 
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true
      }, 
      id_bodega: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true
      },    
  },{
    timestamps: false
  })

  module.exports = Vino
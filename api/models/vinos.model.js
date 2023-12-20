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
    
      
    },
    tipo: {
      type: DataTypes.STRING,
      
      
    }, 
    descripcion: {
        type: DataTypes.STRING,
      
       
      }, 
      precio_unidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true
      }, 
      stock: {
        type: DataTypes.INTEGER,
        
        
      }, 
      id_bodega: {
        type: DataTypes.INTEGER,
        
      },    
  },{
    timestamps: false
  })

  module.exports = Vino

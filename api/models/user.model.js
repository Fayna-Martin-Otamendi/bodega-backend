const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const User = connection.define('user', {
    user_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      require: true
    },
    role: {
        type: DataTypes.ENUM('user', 'owner','admin'),
        defaultValue: 'user'
      },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      require: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    number_phone: {
       type: DataTypes.INTEGER,
    }, 
  },{
    timestamps: false
  })

  module.exports = User
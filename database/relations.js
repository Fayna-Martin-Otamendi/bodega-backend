const Bodega = require('./bodegas.model')
const Calificacion= require('./calificaciones.model')
const Detalle_pedido = require('./detalles_pedido.model')
const Pedido = require('./pedidos.model')
const Reserva = require('./reservas.model')
const Tour = require('./tour.model')
const User= require('./user.model')
const Vino = require('./vinos.model')

function addRelations() {
  try {
    Vino.hasMany(Bodega)
    Bodega.belongsTo(Vino)

    Tour.hasMany(Bodega)
    Bodega.belongsTo(Tour)

    Reserva.hasMany(Usuario)
    Usuario.belongsTo(Reserva)

    Reserva.hasMany(Tour)
    Tour.belongsTo(Reserva)

    Pedido.hasMany(Usuario)
    Usuario.belongsTo(Pedido)

    Detalle_pedido.hasMany(Pedido)
    Pedido.belongsTo(Detalle_pedido)

    Detalle_pedido.hasMany(Vino)
    Vino.belongsTo(Detalle_pedido)

    Calificacion.hasMany(Usuario)
    Usuario.belongsTo(Calificacion)

    Calificacion.hasMany(Vino)
    Vino.belongsTo(Calificacion)

    
    console.log('Relations added')
  } catch (error) {
    throw (error)
  }
}

module.exports = addRelations
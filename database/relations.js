const Bodega = require('../api/models/bodegas.model')
const Calificacion= require('../api/models/calificaciones.model')
const Detalle_pedido = require('../api/models/detalles_pedidos.model')
const Pedido = require('../api/models/pedidos.model')
const Reserva = require('../api/models/reservas.model')
const Tour = require('../api/models/tour.model')
const Usuario= require('../api/models/user.model')
const Vino = require('../api/models/vinos.model')

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

    Usuario.hasMany(Pedido)
    Pedido.belongsTo(Usuario)

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
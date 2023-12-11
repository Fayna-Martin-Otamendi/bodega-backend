const router = require('express').Router()

const authRouter = require('./auth.router')
const bodegasRouter = require('./bodegas.router')
const calificacionesRouter= require('./calificaciones.router')
const detalles_pedidoRouter = require('./detalles_pedido.router')
const pedidosRouter = require('./pedidos.router')
const reservasRouter = require('./reservas.router')
const tourRouter = require('./tour.router')
const userRouter= require('./user.router')
const vinosRouter = require('./vinos.router')
router 
    .use('/auth', authRouter)
    .use('/user', userRouter)
    .use('/bodegas', bodegasRouter)
    .use('/calificaciones', calificacionesRouter)
   .use('/detalles_pedido', detalles_pedidoRouter)
    .use('/pedidos', pedidosRouter)
    .use('/reservas', reservasRouter)
    .use('/tour', tourRouter)
    .use('/vinos', vinosRouter)
    
module.exports = router
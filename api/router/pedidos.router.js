const router = require('express').Router()

const {
    checkAuth,
    checkAdmin,
    checkOwner
} = require('../utils/middlewares')

const {
    getAllOrders,
    createOrder,
    modifyOrder,
    deleteOrder
} = require('../controllers/pedidos.controller')

router
    .get('/', checkAuth, getAllOrders)   
    .post('/', checkAuth, createOrder)
    .put('/:pedidosId', checkAuth, checkAdmin, modifyOrder)
    .delete('/:pedidosId', checkAuth, checkAdmin, deleteOrder)
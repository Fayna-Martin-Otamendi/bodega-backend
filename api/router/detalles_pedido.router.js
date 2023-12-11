const router = require('express').Router()

const {
    checkAuth,
    checkAdmin,
    checkOwner
} = require('../utils/middlewares')

const {
    getAllDetails,
    getOneDetail,
    createDetail,
    modifyDetail,
    deleteDetails
} = require('../controllers/detalles_pedidos.controller')

router
    .get('/', checkAuth, getAllDetails)    
    .get('/:detalles_pedidosId', checkAuth, getOneDetail)    
    .post('/', checkAuth, checkOwner, checkAdmin, createDetail)
    .put('/:detalles_pedidosId', checkAuth, checkOwner, checkAdmin, modifyDetail)
    .delete('/:detalles_pedidosId', checkAuth, checkOwner, checkAdmin, deleteDetails)

    module.exports = router
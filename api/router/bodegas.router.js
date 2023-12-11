const router = require('express').Router()

const {
    checkAuth,
    checkAdmin,
    checkOwner
} = require('../utils/middlewares')

const {
    getAllWineries,
    getOneWinery,
    createWinery,
    modifyWinery,
    deleteWinery,
} = require('../controllers/bodegas.controller')

router
    .get('/', checkAuth, getAllWineries)    
    .get('/:bodegasId', checkAuth, getOneWinery)    
    .post('/', checkAuth, checkOwner, checkAdmin, createWinery)
    .put('/:bodegasId', checkAuth, checkOwner, checkAdmin, modifyWinery)
    .delete('/:bodegasId', checkAuth, checkOwner, checkAdmin, deleteWinery)
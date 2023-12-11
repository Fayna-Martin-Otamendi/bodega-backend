const router = require('express').Router()

const {
    checkAuth,
    checkAdmin,
    checkOwner
} = require('../utils/middlewares')

const {
    getAllWines,
    getOneWine,
    createWine,
    modifyWine,
    deleteWine
} = require('../controllers/vinos.controller')

router
    .get('/', checkAuth, getAllWines)    
    .get('/:vinosId', checkAuth, getOneWine)    
    .post('/', checkAuth, checkOwner, checkAdmin, createWine)
    .put('/:vinosId', checkAuth, checkOwner, checkAdmin, modifyWine)
    .delete('/:vinosId', checkAuth, checkOwner, checkAdmin, deleteWine)

    module.exports = router
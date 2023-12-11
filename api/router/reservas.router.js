const router = require('express').Router()

const {
    checkAuth,
    checkAdmin,
    checkOwner
} = require('../utils/middlewares')

const {
    getAllReservations,
    getOneReservation,
    createReservation,
    modifyReservation,
    deleteReservation
} = require('../controllers/reservas.controller')

router
    .get('/', checkAuth, checkAdmin, getAllReservations)   
    .get('/:reservasId', checkAuth, getOneReservation)   
    .post('/', checkAuth, createReservation)
    .put('/:reservasId', checkAuth, modifyReservation)
    .delete('/:reservasId', checkAuth, deleteReservation)

    module.exports = router
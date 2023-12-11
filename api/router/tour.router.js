const router = require('express').Router()

const {
    checkAuth,
    checkAdmin,
    checkOwner
} = require('../utils/middlewares')

const {
    getAllTours,
    getOneTour,
    getOwnTour,
    createTour,
    modifyTour,
    deleteTour
} = require('../controllers/tours.controller')

router
    .get('/', checkAuth, getAllTours)   
    .get('/:tourId', checkAuth, getOneTour) 
    .get('/:bodegasId', checkAuth, checkOwner, checkAdmin, getOwnTour) 
    .post('/', checkAuth, checkOwner, checkAdmin, createTour)
    .put('/:tourId', checkAuth, checkOwner, checkAdmin, modifyTour)
    .delete('/:tourId', checkAuth, checkOwner, checkAdmin, deleteTour)

    module.exports = router
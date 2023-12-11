const router = require('express').Router()

const {
    checkAuth,
    checkAdmin
} = require('../utils/middlewares')

const {
    createQualification,
    modifyQualification,
    deleteQualification,
} = require('../controllers/calificaciones.controller')

router 
    .post('/:id_vino/calificaciones', checkAuth, createQualification)
    .put('/:id_vino/calificaciones', checkAuth, modifyQualification)
    .delete('/:id_vino/calificaciones', checkAuth, deleteQualification)
const Tour = require('../models/tour.model')

async function getAllTours(req, res){
    try{
        const tour = await Tour.findAll({
            where: req.query
        })
        if (tour){
            return res.status(200).json(tour)
        } else {
            return res.status(404).send('No tour found')
        }
    } catch (error) {
        res.status(500).send(error.message)
        console.log("El error está en la función getAllTours")
    }
}

async function getOneTour(req, res) {
    try{
        const tour = await Tour.findByPk(req.params.id_tour,{
        })
        if (tour) {
            return res.status(200).json(tour)
        } else {
            return res.status(404).send('Tour not found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getOneTour")
    }
} 

async function getOwnTour(req, res) {
    try{
        const tour = await Tour.findByPk(req.params.id_bodega,{
        })
        if (tour) {
            return res.status(200).json(tour)
        } else {
            return res.status(404).send('Tour not found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getOwnTour")
    }
} 

async function createTour(req,res){
    try{
        const tour = await Tour.create({
            franja_horaria: req.body.id_usuario,
            max_personas: req.body.max_personas,
            reservado_personas: req.body.personas,
            id_bodega: req.body.id_bodega,
            fecha: req.body.fecha
        })
        return res.status(200).json({message:'Tour created', tour})
    } catch (error){
        res.status(500).send(error)
        console.log("El error está en la función createTour")
    }
}

async function modifyTour(req, res){
    try{
        const [tourExists, tour] = await Tour.update(req.body,{
            where: {
                id_usuario: req.params.userId
            },
        })
        if (tourExists !== 0) {
            return res.status(200).json({message: 'Tour modified', tour})
        } else {
            return res.status(404).send('Tour not found')
        } 
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función modifyTour")
    }
}

async function deleteTour(req, res) {
    try{
        const tour = await Tour.destroy({
            where: {
                id_usuario: req.params.userId
            },
        })
        if (tour) {
            return res.status(200).json('Tour deleted')
        } else {
            return res.status(404).send('Tour not found')
        }
    } catch (error){
        return res.status(500).send(error)
        console.log("El error está en la función deleteReservation")
    }
}

module.exports = {
    getAllTours,
    getOneTour,
    getOwnTour,
    createTour,
    modifyTour,
    deleteTour
}
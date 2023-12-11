const Reserva = require('../models/reservas.model')

async function getAllReservations(req, res){
    try{
        const reservation = await Reserva.findAll({
            where: req.query
        })
        if (reservation){
            return res.status(200).json(reservation)
        } else {
            return res.status(404).send('No reservation found')
        }
    } catch (error) {
        res.status(500).send(error.message)
        console.log("El error está en la función getAllReservations")
    }
}

async function getOneReservation(req, res) {
    try{
        const reservation = await Reserva.findByPk(req.params.id_reserva,{
        })
        if (reservation) {
            return res.status(200).json(reservation)
        } else {
            return res.status(404).send('Winery not found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getOneWineries")
    }
} 

async function createReservation(req,res){
    try{
        const reservation = await Reserva.create({
            id_usuario: req.body.id_usuario,
            id_tour: req.body.id_tour,
            personas: req.body.personas
        })
        return res.status(200).json({message:'Reservation created', reservation})
    } catch (error){
        res.status(500).send(error)
        console.log("El error está en la función createReservation")
    }
}

async function modifyReservation(req, res){
    try{
        const [reservationExists, reservation] = await Reserva.update(req.body,{
            returning: true,
            where: {
                id_usuario: req.params.userId
            },
        })
        if (reservationExists !== 0) {
            return res.status(200).json({message: 'Reservation modified', reservation})
        } else {
            return res.status(404).send('Reservation not found')
        } 
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función modifyReservation")
    }
}

async function deleteReservation(req, res) {
    try{
        const reservation = await Reserva.destroy({
            where: {
                id_usuario: req.params.userId
            },
        })
        if (reservation) {
            return res.status(200).json('Reservation deleted')
        } else {
            return res.status(404).send('Reservation not found')
        }
    } catch (error){
        return res.status(500).send(error)
        console.log("El error está en la función deleteReservation")
    }
}

module.exports = {
    getAllReservations,
    getOneReservation,
    createReservation,
    modifyReservation,
    deleteReservation
}


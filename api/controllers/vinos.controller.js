const Vino = require('../models/vinos.model')

async function getAllWines(req, res){
    try{
        const wine = await Vino.findAll({
            where: req.query
        })
        if (wine) {
            return res.status(200).json(wine)
        } else {
            return res.status(404).send('No wine found')
        } 
    } catch (error){
        res.status(500).send(error)
        console.log("El error está en la función getAllWines")
    }
}

async function getOneWine(req, res) {
    try{
        const vino = await Vino.findByPk(req.params.id_vino,{
        })
        if (vino) {
            return res.status(200).json(vino)
        } else {
            return res.status(404).send('Tour not found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getOneTour")
    }
}

async function createWine(req, res) {
    try {
        const wine = await Vino.create({
        })
        return res.status(200).json({message: 'Wine created', wine})
    } catch (error){
        res.status(500).send(error)
        console.log("El error está en la función addWine")
    }
}

async function modifyWine(req, res) {
    try {
        const [wineExist, wine] = await Vino.update(req.body,{
            returning: true,
            where: {
                id: req.params.id_bodega
            },
        })
        if (wineExist !== 0) {
            return res.status(200).json({ message: 'Wine updated', wine})
        } else {
            return res.status(404).send('Wine not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función modifyWine")
    }
}

async function deleteWine(req,res) {
    try{
        const wine = await Vino.destroy({
            where: {
                id: req.params.id_bodega
            },
        })
        if (wine) {
            return res.status(200).json('Wine deleted')
        } else {
            return res.status(404).send('Wine not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función deleteWines")
    }
}

module.exports = {
    getAllWines,
    getOneWine,
    createWine,
    modifyWine,
    deleteWine
}
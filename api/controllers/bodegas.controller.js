const Bodega = require('../models/bodegas.model')

async function getAllWineries(req, res) {
    try{
        const wineries = await Bodega.findAll({
            where: req.query,
        })
        if (wineries) {
            return res.status(200).json(wineries)
        } else {
            return res.status(404).send('No wineries found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getAllWineries")
    }
}

async function getOneWinery(req, res) {
    try{
        const winery = await Bodega.findByPk(req.params.id_owner,{
        })
        if (winery) {
            return res.status(200).json(winery)
        } else {
            return res.status(404).send('Winery not found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getOneWineries")
    }
} 

async function createWinery(req, res) {
    try{
        const winery = await Bodega.create({
            name: req.body.name,
            adress: req.body.adress,
            id_owner:req.body.id_owner
        })
        return res.status(200).json({message: 'Winery created', winery: winery})
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función createWinery")
    }
}

async function modifyWinery(req, res) {
    try{
        const [wineryExists, winery] = await Bodega.update(req.body, {
            returning: true,
            where: {
                id: req.params.id_owner
            },
        })
        if(wineryExists !== 0) {
            return res.status(200).json({message: 'Winery modified', winery: winery})
        } else {
            return res.status(404).send('Winery not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función modifyWinery")
    }
}

async function deleteWinery(req, res) {
    try{
        const winery = await Bodega.destroy({
            where: {
                id: req.params.id_owner
            },
        })
        if (winery) {
            return res.status(200).json('Winery deleted')
        } else {
            return res.status(404).send('Winery not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función deleteWinery")
    }
}

module.exports = {
    getAllWineries,
    getOneWinery,
    createWinery,
    modifyWinery,
    deleteWinery
}
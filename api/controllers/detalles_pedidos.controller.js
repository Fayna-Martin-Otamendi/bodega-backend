const Pedido = require('../models/pedidos.model')
const Vino = require('../models/vinos.model')
const Detalle_pedido = require('../models/detalles_pedidos.model')

async function getAllDetails(req, res) {
    try{
        const details = await Detalle_pedido.findAll({
            where: req.query,
        })
        if (details) {
            return res.status(200).json(details)
        } else {
            return res.status(404).send('No details found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getAllDetails")
    }
}

async function getOneDetail(req, res) {
    try{
        const details = await Detalle_pedido.findByPk(req.params.detailsId,{
        })
        if (details) {
            return res.status(200).json(details)
        } else {
            return res.status(404).send('Details not found')
        }
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función getOneDetails")
    }
} 

async function createDetail(req, res) {
    try{
        const details = await Detalle_pedido.create({
            cantidad: req.body.cantidad,
            precio_unidad: req.body.precio_unidad,
        })
        return res.status(200).json({message: 'Details created', details})
    } catch (error) {
        res.status(500).send(error)
        console.log("El error está en la función createDetail")
    }
}

async function modifyDetail(req, res) {
    try{
        const [detailsExists, details] = await Detalle_pedido.update(req.body, {
            where: {
                id_detalles_pedidos: req.params.detalles_pedidosId
            },
        })
        if(detailsExists !== 0) {
            return res.status(200).json({message: 'Details modified', details})
        } else {
            return res.status(404).send('Details not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función modifyWinery")
    }
}

async function deleteDetails(req, res) {
    try{
        const details = await Detalle_pedido.destroy({
            where: {
                id_detalles_pedidos: req.params.detalles_pedidosId
            },
        })
        if (details) {
            return res.status(200).json('Details deleted')
        } else {
            return res.status(404).send('Details not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función deleteDetails")
    }
}

module.exports = {
    getAllDetails,
    getOneDetail,
    createDetail,
    modifyDetail,
    deleteDetails
}
const Pedido = require('../models/pedidos.model')
const User = require('../models/user.model')

async function getAllOrders(req, res) {
    try{
        const orders = await Pedido.findAll({
            where: req.query
        })
        if (orders) {
            return res.status(200).json(orders)
        } else {
            return res.status(404).send('No orders found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

async function createOrder(req, res) {
    try {
        const order = await Pedido.create({
        })
        return res.status(200).json({message: 'Order created', order})
    } catch (error) {
        res.status(500).send(error)
    }
}

async function modifyOrder(req,res) {
    try{
        const order = await Pedido.update(req.body, {
            where: {
                userId: res.locals.user.id_usuario
            },
        })
        if (order) {
            return res.status(200).json('Order modified')
        } else {
            return res.status(404).send('Order not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función modifyOrder")
    }
}


  async function deleteOrder(req, res) {
    try{
        const order = await Pedido.destroy({
            where: {
                id: req.params.id
            },
        })
        if (order) {
            return res.status(200).json('Order deleted')
        } else {
            return res.status(404).send('Order not found')
        }
    } catch (error) {
        return res.status(500).send(error)
        console.log("El error está en la función deleteOrder")
    }
}
  
module.exports = {
    getAllOrders,
    createOrder,
    modifyOrder,
    deleteOrder

}

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

exports.getOrderById = async(req,res) => {
    try {
        const id = parseInt(req.params.id);
        const order = await prisma.order.findUnique({
            where : {id_order : id}
        });
        res.json(order);
    }catch(error){
        res.status(500).json({ error: error });
    }
}
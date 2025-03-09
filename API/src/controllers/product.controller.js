const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

exports.createProduct = async(req,res) => {
    try{
        const {name,price,discount,color,quantity,image_url,date_added} = req.body
        const product = await prisma.product.create({
            data: {
                name : name,
                price : price,
                discount : discount,
                color : color,
                quantity : quantity,
                image_url : image_url,
                date_added : date_added
            },
        });

        res.status(201).json({ message: 'Produit créé avec succès', product });
    }catch(error){
        res.status(500).json({error : error});
    }
}
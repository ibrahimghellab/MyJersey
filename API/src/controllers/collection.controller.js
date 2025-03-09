const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

exports.getAllCollections = async(req,res) => {
    try {
        const collections = await prisma.collection.findMany();
        res.json(collections);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.createCollection = async (req, res) => {
    try {
        const {name} = req.body;

        const collection = await prisma.collection.create({
            data: {
                name : name
            },
        });

        res.status(201).json({ message: 'Collection créé avec succès', collection });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

exports.getCollectionById = async (req,res) => {
    try{
        const id = parseInt(req.params.id);
        const collection = await prisma.collection.findUnique({
            where : {id_collection : id}
        })
        res.json(collection)
    }catch(error){
        console.error(error);
        res.status(500).json({ error: error });
    }
    

}
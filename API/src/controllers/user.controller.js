const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');


const prisma = new PrismaClient();

// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
};


exports.createUser = async (req, res) => {
    try {
        const {gender,surname,name,phone,address,email,password} = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email et mot de passe sont obligatoires' });
        }

        
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé' });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const user = await prisma.user.create({
            data: {
                gender : gender,
                surname : surname,
                name : name,
                phone_number : phone,
                address : address,
                email : email,
                hash : hash,
                salt : salt
            },
        });

        res.status(201).json({ message: 'Utilisateur créé avec succès', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
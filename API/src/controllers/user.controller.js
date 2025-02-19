const { PrismaClient } = require('@prisma/client');
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
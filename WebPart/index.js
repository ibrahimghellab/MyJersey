import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Ajouter un utilisateur
    const user = await prisma.user.create({
        data: {
            gender:true,
            surname: "Luketsu",
            name: "Kevinsourya",
            phone_number: "+330769790950",
            address: "viry",
            email: "test@gmail.com",
            hash: "abcd",
            salt:"ab"

        }
    });
    console.log("Utilisateur créé :", user);

    // Récupérer les utilisateurs
    const users = await prisma.user.findMany();
    console.log("Liste des utilisateurs :", users);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
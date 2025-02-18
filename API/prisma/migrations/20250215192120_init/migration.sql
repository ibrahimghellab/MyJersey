-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "gender" BOOLEAN NOT NULL,
    "surname" VARCHAR(55) NOT NULL,
    "name" VARCHAR(55) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "hash" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

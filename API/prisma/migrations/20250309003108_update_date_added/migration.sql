/*
  Warnings:

  - Changed the type of `date_added` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "date_added",
ADD COLUMN     "date_added" TIMESTAMP(3) NOT NULL;

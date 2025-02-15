-- CreateTable
CREATE TABLE "Product" (
    "id_product" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "color" VARCHAR(63) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,
    "date_added" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "Category" (
    "id_category" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id_collection" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id_collection")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id_product" INTEGER NOT NULL,
    "id_category" INTEGER NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id_product","id_category")
);

-- CreateTable
CREATE TABLE "ProductCollection" (
    "id_product" INTEGER NOT NULL,
    "id_collection" INTEGER NOT NULL,

    CONSTRAINT "ProductCollection_pkey" PRIMARY KEY ("id_product","id_collection")
);

-- CreateTable
CREATE TABLE "Order" (
    "id_order" SERIAL NOT NULL,
    "date_order" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "adress_order" VARCHAR(255) NOT NULL,
    "payment_method" VARCHAR(255) NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id_order")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id_user" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id_user","id_product")
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "id_order" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("id_order","id_product")
);

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCollection" ADD CONSTRAINT "ProductCollection_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCollection" ADD CONSTRAINT "ProductCollection_id_collection_fkey" FOREIGN KEY ("id_collection") REFERENCES "Collection"("id_collection") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "Order"("id_order") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

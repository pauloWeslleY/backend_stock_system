/*
  Warnings:

  - A unique constraint covering the columns `[title,description]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,password]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "products_description_key";

-- DropIndex
DROP INDEX "products_title_key";

-- DropIndex
DROP INDEX "users_password_key";

-- DropIndex
DROP INDEX "users_email_key";

-- CreateTable
CREATE TABLE "category" (
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products_title_description_key" ON "products"("title", "description");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_password_key" ON "users"("email", "password");

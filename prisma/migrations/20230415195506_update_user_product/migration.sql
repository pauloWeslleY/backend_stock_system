/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "products_title_description_key";

-- DropIndex
DROP INDEX "users_email_password_key";

-- CreateIndex
CREATE UNIQUE INDEX "products_title_key" ON "products"("title");

-- CreateIndex
CREATE UNIQUE INDEX "products_description_key" ON "products"("description");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");

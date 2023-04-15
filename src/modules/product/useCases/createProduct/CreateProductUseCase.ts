
import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { ICreateProduct } from "../../interfaces/ICreateProduct";
import { ServerError } from "../../../../error/ServerError";

export class CreateProductUseCase {
   async createProducts({title, price, description, imageUrl}: ICreateProduct): Promise<Product> {
      //TODO: Validando e verificando se o produto já existe no banco
      const productAlreadyExisting = await prisma.product.findUnique({
         where: {
            title,
         }
      });

      //TODO: Validação se o produto já é existente no banco
      if (productAlreadyExisting) {
         throw new ServerError("Existing product!");
      }

      //TODO: Criando Produto no banco
      const product = await prisma.product.create({
         data: {
            title,
            price,
            description,
            imageUrl
         }
      });

      return product;
   }
}
import { ServerError } from "../../../../error/ServerError";
import { prisma } from "../../../../prisma/client";
import { ICreateCategory } from "../../interfaces/ICreateCategory";

export class CreateCategoryUseCase {
   async createCategory({ name, categoryId }: ICreateCategory): Promise<void> {
      // TODO: verificando se o produto existe
      const productAlreadyExiting = await prisma.product.findUnique({
         where: {
            id: categoryId
         }
      });

      if (!productAlreadyExiting) {
         throw new ServerError("Product is not existing!");
      }

      // NOTE: verificando se o produto não esta adicionado em nenhuma categoria
      const productAlreadyAddCategory = await prisma.categories.findFirst({
         where: {
            name
         }
      });

      if (productAlreadyAddCategory) {
         throw new ServerError("Product added to is this category");
      }

      //HACK: criando categorias
      await prisma.categories.create({
         data: {
            name,
            categoryId
         }
      });
   }
}
import { ServerError } from "../../../../error/ServerError";
import { prisma } from "../../../../prisma/client";
import { ICreateCategory } from "../../interfaces/ICreateCategory";

export class CreateCategoryUseCase {
   async createCategory({ name }: ICreateCategory) {
      // NOTE: verificando se a categoria já existe
      const categoryAlreadyExisting = await prisma.categories.findFirst({
         where: {
            name,
         },
      });

      if (categoryAlreadyExisting) {
         throw new ServerError("Category already exists!");
      }

      try {
         //HACK: criando categorias
         const category = await prisma.categories.create({
            data: {
               name,
            }
         });

         console.log(`Categoria criada com sucesso: => ${category.name}`);

         return category;
      } catch (err) {
         throw new ServerError("Erro ao criar categoria!");
      }
   }
}

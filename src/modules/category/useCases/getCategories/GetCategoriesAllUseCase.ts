import { Categories } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetCategoriesAllUseCase {
   async getCategoriesAll(): Promise<Categories[]> {
      const category = await prisma.categories.findMany({
         orderBy: {
            name: "asc"
         },
         include: {
            products: true
         }
      });

      return category;
   }
}
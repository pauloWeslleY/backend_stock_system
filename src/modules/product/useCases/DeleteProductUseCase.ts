import { ServerError } from "../../../error/ServerError";
import { prisma } from "../../../prisma/client";

export class DeleteProductUseCase {
   async deleteProduct({ id }: { id: string }) {
      try {
         const deletedProduct = await prisma.product.delete({
            where: {
               id,
            }
         });

         return deletedProduct;
      } catch (err) {
         throw new ServerError("Failed to delete product!");
      }
   }
}

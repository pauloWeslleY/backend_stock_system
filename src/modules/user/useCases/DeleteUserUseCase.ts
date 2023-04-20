import { ServerError } from "../../../error/ServerError";
import { prisma } from "../../../prisma/client";

export class DeleteUserUseCase {
   async deleteUser({id}: {id: string}) {
      try {
         const user = await prisma.user.delete({
            where: {
               id
            }
         });

         return user;
      } catch (err) {
         throw new ServerError("Failed to delete user!");
      }
   }
}
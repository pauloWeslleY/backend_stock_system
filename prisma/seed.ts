import { prisma } from "../src/prisma/client";

const firstProductId = "clgkcxt9g0001yfaj7ltjb4i5";
const firstProductCreationDate = new Date("2022-12-31T03:00:00.000");

async function main() {
   await prisma.product.deleteMany();

   await Promise.all([
      prisma.product.create({
         data: {
            id: firstProductId,
            title: "Orchids Vandas",
            price: 120.00,
            description: "Product Orchids - Vandas",
            quantity: 20,
            imageUrl: {
               create: [
                  {
                    image_url: "https://orquidario.vercel.app/image/orchids/orquidea1.jpg"
                  },
                  {
                    image_url: "https://orquidario.vercel.app/image/orchids/orquidea01.jpg"
                  },
               ]
            },
            category_id: "clgiwgdsa0000yf9rfjtw111h",
            created_at: firstProductCreationDate
         }
      })
   ]);
}

main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });

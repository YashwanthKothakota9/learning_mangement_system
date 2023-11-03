const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
        { name: "Design" },
      ],
    });
    console.log("Success seeding the database categories");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        categoryName: "Broadcast & Media",
        image: "/broadcast.png",
      },
      {
        categoryName: "Digital Arts & Design",
        image: "/digitalarts.png",
      },
      {
        categoryName: "Business & Finance",
        image: "/business.png",
      },
      {
        categoryName: "Marketing",
        image: "/marketing.png",
      },
      {
        categoryName: "Tutoring",
        image: "/tutoring.png",
      },
      {
        categoryName: "Computing",
        image: "/programming.png",
      },
    ],
  });

  const author = await prisma.user.createMany({
    data: [
      {
        name: "Sohrab",
        lastname: "Radmehr",
        password: "Password!",
        email: "sohrab@gmail.com",
        aboutMe: "I'm cool",
      },
      {
        name: "Murad",
        lastname: "Murad",
        password: "Password!",
        email: "Murad@gmail.com",
        aboutMe: "I'm cool 2",
      },
    ],
  });

  const author1 = await prisma.user.findUnique({
    where: {
      userId: 1,
    },
  });

  const author2 = await prisma.user.findUnique({
    where: {
      userId: 2,
    },
  });

  console.log(author)
  const program = await prisma.program.createMany({
    data: [
      {
        programName: "Full-Stack Web Development",
        authorId: author1.userId
      },
    ],
  });

  const chatRooms = await prisma.chatRoom.createMany({
    data:[
      {
        userOneId: author1.userId,
        userTwoId: author2.userId,
      }
    ]
  })

  console.log({ categories, author });
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

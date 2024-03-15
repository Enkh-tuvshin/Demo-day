import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async () => {
  const user = await prisma.user.create({
    data: {
      name: 'azaa',
      password: '12345678',
    },
  });
  console.log(user);
};

const getUser = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
  const usersWithUser = await prisma.user.findMany({
    include: {
      name: true,
    },
  });
  console.dir(usersWithUser, { depth: null });
};

createUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

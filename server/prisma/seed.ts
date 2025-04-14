import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const notificationTypes = [
    { name: 'info' },
    { name: 'warning' },
    { name: 'error' },
    { name: 'success' },
  ];

  for (const type of notificationTypes) {
    await prisma.notificationType.create({
      data: type,
    });
  }

  console.log('Seed data for NotificationType created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

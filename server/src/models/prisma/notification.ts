import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Notification = prisma.notification;
export const NotificationType = prisma.notificationType;

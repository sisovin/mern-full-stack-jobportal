import { Request, Response } from 'express';
import { Notification, NotificationType } from '../models/prisma/notification';
import { publishNotificationEvent } from '../services/notificationService';
import { prisma } from '../models/prisma';

export const subscribeToNotifications = async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    // Logic to subscribe user to notifications
    res.status(200).json({ message: 'Subscribed to notifications successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to subscribe to notifications', error });
  }
};

export const fetchNotifications = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch notifications', error });
  }
};

export const markNotificationAsRead = async (req: Request, res: Response) => {
  const { notificationId } = req.params;

  try {
    await prisma.notification.update({
      where: { id: notificationId },
      data: { read: true },
    });
    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to mark notification as read', error });
  }
};

export const createNotification = async (req: Request, res: Response) => {
  const { title, message, type, userId } = req.body;

  try {
    const notification = await prisma.notification.create({
      data: {
        title,
        message,
        type: type as NotificationType,
        userId,
      },
    });

    // Publish notification event
    publishNotificationEvent(notification);

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create notification', error });
  }
};

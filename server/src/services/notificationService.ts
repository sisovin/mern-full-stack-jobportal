import { publishNotificationEvent, subscribeToNotificationEvents } from './redisClient';

export const publishNotification = async (channel: string, message: string) => {
  try {
    await publishNotificationEvent(channel, message);
  } catch (error) {
    console.error('Failed to publish notification', error);
  }
};

export const subscribeToNotifications = async (channel: string, callback: (message: string) => void) => {
  try {
    await subscribeToNotificationEvents(channel, callback);
  } catch (error) {
    console.error('Failed to subscribe to notifications', error);
  }
};

import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

export const connectToRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Failed to connect to Redis', error);
  }
};

export const publishNotificationEvent = async (channel: string, message: string) => {
  try {
    await redisClient.publish(channel, message);
    console.log(`Notification event published to channel ${channel}`);
  } catch (error) {
    console.error('Failed to publish notification event', error);
  }
};

export const subscribeToNotificationEvents = async (channel: string, callback: (message: string) => void) => {
  try {
    await redisClient.subscribe(channel, (message) => {
      console.log(`Notification event received from channel ${channel}`);
      callback(message);
    });
  } catch (error) {
    console.error('Failed to subscribe to notification events', error);
  }
};

import axios from './axios';
import { Notification, NotificationPayload } from '../@types/notification';

const API_URL = '/api/notifications';

export const subscribeToNotifications = async (userId: string): Promise<void> => {
  try {
    await axios.post(`${API_URL}/subscribe`, { userId });
  } catch (error) {
    console.error('Error subscribing to notifications:', error);
    throw error;
  }
};

export const fetchNotifications = async (userId: string): Promise<Notification[]> => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

export const markNotificationAsRead = async (notificationId: string): Promise<void> => {
  try {
    await axios.patch(`${API_URL}/read/${notificationId}`);
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw error;
  }
};

export const createNotification = async (payload: NotificationPayload): Promise<Notification> => {
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

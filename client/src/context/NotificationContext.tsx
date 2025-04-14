import React, { createContext, useState, useEffect, useContext } from 'react';
import { Notification } from '../@types/notification';
import { subscribeToNotifications, fetchNotifications, markNotificationAsRead } from '../api/notifications.api';

interface NotificationContextProps {
  notifications: Notification[];
  markAsRead: (notificationId: string) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const userId = 'currentUserId'; // Replace with actual user ID
    subscribeToNotifications(userId);

    const fetchUserNotifications = async () => {
      const fetchedNotifications = await fetchNotifications(userId);
      setNotifications(fetchedNotifications);
    };

    fetchUserNotifications();
  }, []);

  const markAsRead = async (notificationId: string) => {
    await markNotificationAsRead(notificationId);
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === notificationId ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, markAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

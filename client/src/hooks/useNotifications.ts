import { useEffect, useState } from 'react';
import { Notification } from '../@types/notification';
import { subscribeToNotifications, fetchNotifications } from '../api/notifications.api';

const useNotifications = (userId: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const subscribe = async () => {
      await subscribeToNotifications(userId);
    };

    const fetchUserNotifications = async () => {
      const fetchedNotifications = await fetchNotifications(userId);
      setNotifications(fetchedNotifications);
    };

    subscribe();
    fetchUserNotifications();
  }, [userId]);

  return notifications;
};

export default useNotifications;

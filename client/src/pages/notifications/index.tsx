import React from 'react';
import { useNotifications } from '../../hooks/useNotifications';
import { NotificationItem } from '../../components/notifications/NotificationItem';

const NotificationsPage: React.FC = () => {
  const userId = 'currentUserId'; // Replace with actual user ID
  const notifications = useNotifications(userId);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;

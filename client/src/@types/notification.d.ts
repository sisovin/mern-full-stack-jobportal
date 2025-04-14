export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: Date;
}

export interface NotificationPayload {
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

import { Server, Socket } from 'socket.io';
import { subscribeToNotifications } from '../services/notificationService';

let io: Server;

export const initializeNotificationSocket = (server: any) => {
  io = new Server(server);

  io.on('connection', (socket: Socket) => {
    console.log('New client connected');

    socket.on('subscribeToNotifications', (userId: string) => {
      subscribeToNotifications(userId, (notification) => {
        socket.emit('notification', notification);
      });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

export const emitNotification = (userId: string, notification: any) => {
  io.to(userId).emit('notification', notification);
};

import http from 'http';
import app from './app';
import { initializeNotificationSocket } from './sockets/notificationSocket';

const server = http.createServer(app);

initializeNotificationSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import { Router } from 'express';
import { subscribeToNotifications, fetchNotifications, markNotificationAsRead, createNotification } from '../controllers/notificationController';

const router = Router();

router.post('/subscribe', subscribeToNotifications);
router.get('/user/:userId', fetchNotifications);
router.patch('/read/:notificationId', markNotificationAsRead);
router.post('/', createNotification);

export default router;

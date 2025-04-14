import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import notificationRoutes from './routes/notificationRoutes';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use('/api/notifications', notificationRoutes);

export default app;

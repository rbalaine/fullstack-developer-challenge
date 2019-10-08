import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import express from 'express';
import logger from './lib/logger';
import handleError from './middlewares/handle-error';
import logQuery from './middlewares/log-query';
import postalCodesRouter from './routes/postal-codes';
import locationsRouter from './routes/locations';

const port = process.env.PORT || 4000;

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at: Promise ', promise, reason);
});

// Set up a rate limiter to avoid brute force authentication and limit DDOS atacks
// TODO: Adjust limit according to IT Security department recommendation
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP address to 100 requests per windowMs
});

const app = express();

app.use(limiter);
app.use(compression());
app.use(cors());

app.use('*', logQuery);

app.get('/locations', locationsRouter);
app.get('/postal-codes', postalCodesRouter);

app.use(handleError);

app.listen(port, () => {
  logger.info(`Express listening on port ${port}`);
});

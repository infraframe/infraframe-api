import { env } from '@/common/utils/envConfig';
import { app, logger } from '@/server';
import { createServer } from 'node:http'; // or node:https
import { attachSockets } from 'zod-sockets';
import { Server } from 'socket.io';
import { actions } from '@/actions';
import { config } from '@/config';

attachSockets({
  /** @see https://socket.io/docs/v4/server-options/ */
  io: new Server(),
  config: config,
  actions: actions,
  target: createServer(app).listen(env.PORT),
});

// const server = app.listen(env.PORT, () => {
//   const { NODE_ENV, HOST, PORT } = env;
//   logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
// });

const onCloseSignal = () => {
  logger.info('sigint received, shutting down');
  // server.close(() => {
  //   logger.info('server closed');
  //   process.exit();
  // });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);

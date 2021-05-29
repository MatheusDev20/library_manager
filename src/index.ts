import router from './routes';
import { server } from './server';

server.app.use(router);
server.start();

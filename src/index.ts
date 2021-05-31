import router from './routes';
import { server } from './infra/http/server';
import './infra/config/database/index';

server.app.use(router);
server.start();

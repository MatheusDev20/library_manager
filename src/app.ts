import { server } from './infra/http/server';
import './infra/config/database/index';

server.start();

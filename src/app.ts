import 'reflect-metadata';

import { server } from './infra/http/server';
import './infra/config/database';
import './infra/container/index';

server.start();

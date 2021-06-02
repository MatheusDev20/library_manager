import express from 'express';
import routes from '../../routes';
import { connect } from '../config/database';

class Server {
  app = express()

  port = process.env.PORT || 3333

  start() {
    connect.then(() => {
      console.log('Conexão estabelecida');
    })
      .catch((err) => {
        throw new Error(err);
      });
    this.app.use(express.json());

    this.app.use(routes);

    this.app.listen(this.port, () => {
      console.log(`Server UP and Running on port: ${this.port}`);
    });
  }
}

export const server = new Server();

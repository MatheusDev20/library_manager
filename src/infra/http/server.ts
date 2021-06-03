import express from 'express';
import routes from '../routes';

class Server {
  app = express()

  port = process.env.PORT || 3333

  start() {
    this.app.use(express.json());

    this.app.use(routes);
    this.app.listen(this.port, () => {
      console.log(`Server UP and Running on port: ${this.port}`);
    });
  }
}

export const server = new Server();

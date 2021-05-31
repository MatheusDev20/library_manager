import express from 'express';

class Server {
  app = express()

  port = process.env.PORT || 3333

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server UP and Running on port: ${this.port}`);
    });
  }
}

export const server = new Server();

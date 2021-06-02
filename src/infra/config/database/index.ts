import { createConnection } from 'typeorm';

const connect = new Promise((resolve, reject) => {
  try {
    createConnection();
    resolve(() => {
      console.log('Conexão estabelecidda');
    });
  } catch (err) {
    reject(err);
  }
});

export { connect };

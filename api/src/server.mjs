import app from './app.mjs';
import config from '../config/config.mjs';
import { connectSequelize } from './db.mjs';
import { initDBModels } from './models/index.mjs';

const {
  server: { port },
} = config;

try {
  await connectSequelize();
  await initDBModels();
  app.listen(port, async () =>
    console.log(`Server listening on port: ${port}`)
  );
} catch (error) {
  console.error('Failed to start server: ', error);
  process.exit(-1);
}

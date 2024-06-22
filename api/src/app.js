import express from 'express';
import routesApi from './routes/routes.js';
import cors from 'cors';

// Iniciamos la app con express
const app = express();

app.use(cors());
app.use(routesApi);

export default app
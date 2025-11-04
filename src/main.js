import 'dotenv/config';
import express from 'express';
import reservasRouter from './routes/reservas.routes.js';
import { notFound, errorHandler } from './utils/error-handler.js';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.json(
    { 
        ok: true, 
        name: 'API Reservas Hoteleras' 
    }
));

app.use('/api/reservas', reservasRouter);

// 404 y errores
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
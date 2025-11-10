import { Router } from 'express';
import * as reservasController from '../controllers/reservas.controller.js';

const router = Router();

// CRUD
router.post('/', reservasController.crearReserva); // POST /api/reservas
router.get('/', reservasController.obtenerReservas); // GET /api/reservas (+ filtros por query)
router.get('/:id', reservasController.obtenerReservaPorId); // GET /api/reservas/:id
router.put('/:id', reservasController.actualizarReservaPorId); // PUT /api/reservas/:id
router.delete('/:id', reservasController.eliminarReservaPorId); // DELETE /api/reservas/:id

export default router;

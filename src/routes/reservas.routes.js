import { Router } from 'express';
import * as reservasCtrl from '../controllers/reservas.controller.js';


const router = Router();


// CRUD
router.post('/', reservasCtrl.crearReserva); // POST /api/reservas
router.get('/', reservasCtrl.listarReservas); // GET /api/reservas (+ filtros por query)
router.get('/:id', reservasCtrl.obtenerReservaPorId); // GET /api/reservas/:id
router.put('/:id', reservasCtrl.actualizarReserva); // PUT /api/reservas/:id
router.delete('/:id', reservasCtrl.eliminarReserva); // DELETE /api/reservas/:id


export default router;
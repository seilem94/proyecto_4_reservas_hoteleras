import * as service from '../services/reservas.service.js';
import { BadRequestError, NotFoundError } from '../utils/http-errors.js';
import {
  validateCrear,
  validateActualizar,
  parseEntero,
} from '../utils/validators.js';

//Manejo HTTP CRUD para las reservas. No hay lógica de negocio aquí.

/*Create (POST /api/reservas)*/
export async function crearReserva(req, res, next) {
  try {
    const { value, error } = validateCrear(req.body);
    if (error) throw new BadRequestError(error);

    const nueva = await service.crear(value);
    res.status(201).json({ ok: true, data: nueva });
  } catch (err) {
    next(err);
  }
}

/*Read (GET /api/reservas?hotel=&fecha_inicio=&fecha_fin=&tipo_habitacion=&estado=&num_huespedes=)*/
export async function obtenerReservas(req, res, next) {
  try {
    const filtros = {
      hotel: req.query.hotel,
      fecha_inicio: req.query.fecha_inicio,
      fecha_fin: req.query.fecha_fin,
      tipo_habitacion: req.query.tipo_habitacion,
      estado: req.query.estado,
      num_huespedes: parseEntero(req.query.num_huespedes),
    };

    const reservas = await service.listar(filtros);
    res.json({ ok: true, data: reservas });
  } catch (err) {
    next(err);
  }
}

// GET /api/reservas/:id
export async function obtenerReservaPorId(req, res, next) {
  try {
    const id = parseEntero(req.params.id);
    if (!Number.isInteger(id)) throw new BadRequestError('id inválido');

    const reserva = await service.obtenerPorId(id);
    if (!reserva) throw new NotFoundError('Reserva no encontrada');

    res.json({ ok: true, data: reserva });
  } catch (err) {
    next(err);
  }
}

/*Update (PUT /api/reservas/:id)*/
export async function actualizarReservaPorId(req, res, next) {
  try {
    const id = parseEntero(req.params.id);
    if (!Number.isInteger(id)) throw new BadRequestError('id inválido');

    const { value, error } = validateActualizar(req.body);
    if (error) throw new BadRequestError(error);

    const actualizada = await service.actualizar(id, value);
    if (!actualizada) throw new NotFoundError('Reserva no encontrada');

    res.json({ ok: true, data: actualizada });
  } catch (err) {
    next(err);
  }
}

/*Delete (DELETE /api/reservas/:id)*/
export async function eliminarReservaPorId(req, res, next) {
  try {
    const id = parseEntero(req.params.id);
    if (!Number.isInteger(id)) throw new BadRequestError('id inválido');

    const ok = await service.eliminar(id);
    if (!ok) throw new NotFoundError('Reserva no encontrada');

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

import { AppError, NotFoundError, InternalServerError } from './http-errors.js';

export function notFound(req, res, next) {
  next(new NotFoundError(`Ruta ${req.method} ${req.originalUrl} no encontrada`));
}

export function errorHandler(err, req, res, _next) {
  const isAppError = err instanceof AppError;
  const status = isAppError ? err.status : 500;
  const code = isAppError ? err.code : 'INTERNAL_ERROR';
  const message = isAppError ? err.message : 'Error interno';

  // opcional: log detallado aquí
  if (!isAppError) {
    err = new InternalServerError(message, { original: err?.message });
  }

  res.status(status).json({
    ok: false,
    error: { code, message, details: isAppError ? err.details : null },
  });
}
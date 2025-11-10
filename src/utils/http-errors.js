// Base y catálogo de errores HTTP reutilizables

export class AppError extends Error {
  constructor(
    message,
    { status = 500, code = 'INTERNAL_ERROR', details = null } = {}
  ) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.code = code;
    this.details = details;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'Solicitud inválida', details) {
    super(message, { status: 400, code: 'BAD_REQUEST', details });
  }
}
export class UnauthorizedError extends AppError {
  constructor(message = 'No autorizado', details) {
    super(message, { status: 401, code: 'UNAUTHORIZED', details });
  }
}
export class ForbiddenError extends AppError {
  constructor(message = 'Prohibido', details) {
    super(message, { status: 403, code: 'FORBIDDEN', details });
  }
}
export class NotFoundError extends AppError {
  constructor(message = 'No encontrado', details) {
    super(message, { status: 404, code: 'NOT_FOUND', details });
  }
}
export class ConflictError extends AppError {
  constructor(message = 'Conflicto', details) {
    super(message, { status: 409, code: 'CONFLICT', details });
  }
}
export class UnprocessableEntityError extends AppError {
  constructor(message = 'Entidad no procesable', details) {
    super(message, { status: 422, code: 'UNPROCESSABLE_ENTITY', details });
  }
}
export class InternalServerError extends AppError {
  constructor(message = 'Error interno', details) {
    super(message, { status: 500, code: 'INTERNAL_ERROR', details });
  }
}

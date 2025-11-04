# PROYECTO 4: Reservas Hoteleras

    Se realizará una Api con las siguiente características

## ARQUITECTURA DE CARPETAS

    Crear una arquitectura de carpetas y archivos clara. Se utilizó la entregada como ejemplo, y se le realizó pequeñas modificaciones, añadir las carpetas services (para alojar la lógica de negocio), y utils (como capa intermedia). 

    proyecto_4_reservas_hoteleras
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── services/
    │   ├── utils/
    │   └── main.js  <- ARCHIVO DE ENTRADA
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md  



## APLICACIÓN DE SERVICIOS CRUD

    
    Permitir la creación de reservas con los detalles necesarios (por ejemplo, hotel, tipo de habitación, número de huéspedes, fechas, etc.).
    Permitir la visualización de la lista de reservas.
    Permitir la obtención de la información de una reserva específica.
    Permitir la actualización de la información de una reserva.
    Permitir la eliminación de una reserva.
    Permitir la búsqueda de reservas por hotel, rango de fechas, tipo de habitación, estado y número de huéspedes.
    Almacenar los datos de las reservas en una estructura de datos.

## Endpoints principales

    - **POST** `/api/reservas` – Crear reserva
    - **GET** `/api/reservas` – Listar reservas (admite filtros por `hotel`, `fecha_inicio`, `fecha_fin`, `tipo_habitacion`, `estado`, `num_huespedes`)
    - **GET** `/api/reservas/:id` – Obtener por id
    - **PUT** `/api/reservas/:id` – Actualizar
    - **DELETE** `/api/reservas/:id` – Eliminar

## DOCUMENTACIÓN DE LA API (OPCIONAL)

    Documentar todos los endpoints utilizando Swagger y OpenAPI

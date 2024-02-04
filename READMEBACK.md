<!-- @format -->

# Backend de la Aplicación

## Archivo `app.js`

El archivo `app.js` es el punto de entrada principal de tu aplicación. Aquí se configuran las dependencias, middleware, y se definen las rutas para el manejo de solicitudes HTTP. A continuación, una descripción del contenido del archivo:

**Ubicación:** `app.js`

- **Express Configuration:**

  - `express`: Importa el framework Express.
  - `mongoose`: Importa la biblioteca para interactuar con la base de datos MongoDB.
  - `bodyParser`: Middleware para analizar el cuerpo de las solicitudes HTTP en formato JSON.
  - `cors`: Middleware que habilita la política de mismo origen (CORS) para permitir solicitudes desde otros dominios.

- **Configuración de Express:**

  - `app`: Instancia de Express que representa la aplicación.
  - `PORT`: Puerto en el que la aplicación escuchará las solicitudes. Puede ser un puerto proporcionado por el entorno o el puerto 3000 por defecto.

- **Middleware Configurations:**

  - `app.use(cors())`: Habilita el middleware CORS para permitir solicitudes desde cualquier origen.
  - `app.use(bodyParser.json())`: Configura el middleware `bodyParser` para analizar el cuerpo de las solicitudes en formato JSON.

- **Configuración de MongoDB:**

  - `mongoose.connect(...)`: Conecta la aplicación a la base de datos MongoDB Atlas. La cadena de conexión contiene credenciales y detalles de la base de datos.
  - Event Listeners:
    - `connected`: Imprime un mensaje cuando la conexión a MongoDB es establecida.
    - `error`: Maneja errores de conexión a MongoDB e imprime detalles del error.

- **Configuración de Rutas:**

  - Se importan los archivos de rutas para exámenes, estudiantes, profesores, autenticación de profesores y autenticación de estudiantes.
  - `app.use("/exams", examRoutes)`: Asocia las rutas de exámenes al prefijo `/exams`.
  - `app.use("/students", studentRoutes)`: Asocia las rutas de estudiantes al prefijo `/students`.
  - `app.use("/students/auth", studentAuthRoutes)`: Asocia las rutas de autenticación de estudiantes al prefijo `/students/auth`.
  - `app.use("/professors", professorRoutes)`: Asocia las rutas de profesores al prefijo `/professors`.
  - `app.use("/professors/auth", professorAuthRoutes)`: Asocia las rutas de autenticación de profesores al prefijo `/professors/auth`.

- **Iniciar el Servidor:**
  - `app.listen(PORT, ...)`: Inicia el servidor y escucha las solicitudes en el puerto especificado. Imprime un mensaje indicando la dirección del servidor.

Este archivo centraliza la configuración y define la estructura básica de tu aplicación Node.js con Express y MongoDB.

## Carpeta `/src`

### `middleware/authMiddleware.js`

Este archivo, ubicado en la carpeta `src/middleware`, contiene un middleware denominado `authenticateToken`. Este middleware realiza la autenticación del token JWT presente en la cabecera de la solicitud. Además, verifica si el usuario autenticado tiene permisos de profesor antes de permitir el acceso a rutas específicas.

Este middleware se utiliza para garantizar que las rutas protegidas solo sean accesibles por usuarios autenticados como profesores. Si el token falta, es inválido o el usuario no es un profesor, se devolverán respuestas de error correspondientes.

**Ubicación:** `src/middleware/authMiddleware.js`

Este middleware es esencial para la seguridad y el control de acceso en el backend de la aplicación.

## Carpeta `/src/models`

### `exam.js`

El archivo `exam.js` en la carpeta `src/models` define el esquema de datos para un examen en la base de datos MongoDB mediante Mongoose. El esquema incluye información como el título del examen, preguntas con sus opciones y los puntos asignados a cada pregunta.

**Ubicación:** `src/models/exam.js`

### `professor.js`

El archivo `professor.js` en la carpeta `src/models` define el esquema de datos para un profesor en la base de datos MongoDB mediante Mongoose. El esquema incluye detalles como el nombre del profesor, nombre de usuario único, y contraseña. Además, mantiene una referencia a los estudiantes asociados al profesor.

**Ubicación:** `src/models/professor.js`

### `student.js`

El archivo `student.js` en la carpeta `src/models` define el esquema de datos para un estudiante en la base de datos MongoDB mediante Mongoose. El esquema incluye detalles como el nombre del estudiante, nombre de usuario único, contraseña y mantiene referencias a los exámenes y respuestas asociadas al estudiante.

**Ubicación:** `src/models/student.js`

### `studentAnswer.js`

El archivo `studentAnswer.js` en la carpeta `src/models` define el esquema de datos para las respuestas de un estudiante en un examen en la base de datos MongoDB mediante Mongoose. El esquema incluye información como el estudiante que dio las respuestas, el examen al que respondió, las respuestas a cada pregunta con las opciones seleccionadas y la puntuación total.

**Ubicación:** `src/models/studentAnswer.js`

## Carpeta `/src/routes`

### `examRoutes.js`

El archivo `examRoutes.js` en la carpeta `src/routes` contiene las rutas relacionadas con la gestión de exámenes. Proporciona una ruta para la creación de nuevos exámenes. Verifica si el total de puntos asignados a las preguntas es igual a 100 antes de crear el examen.

**Ubicación:** `src/routes/examRoutes.js`

### `professorAuthRoutes.js`

El archivo `professorAuthRoutes.js` en la carpeta `src/routes` contiene rutas relacionadas con la autenticación de profesores. Incluye rutas para registrar y autenticar profesores. La contraseña se almacena después de ser hasheada, y se genera un token JWT para la autenticación.

**Ubicación:** `src/routes/professorAuthRoutes.js`

### `professorRoutes.js`

El archivo `professorRoutes.js` en la carpeta `src/routes` contiene rutas relacionadas con la gestión de profesores. Proporciona rutas para obtener todos los profesores, obtener un profesor por su ID, modificar un profesor existente y obtener resultados de estudiantes para un examen específico.

**Ubicación:** `src/routes/professorRoutes.js`

### `studentAuthRoutes.js`

El archivo `studentAuthRoutes.js` en la carpeta `src/routes` contiene rutas relacionadas con la autenticación de estudiantes. Incluye rutas para registrar y autenticar estudiantes. La contraseña se almacena después de ser hasheada, y se genera un token JWT para la autenticación.

**Ubicación:** `src/routes/studentAuthRoutes.js`

### `studentRoutes.js`

El archivo `studentRoutes.js` en la carpeta `src/routes` contiene rutas relacionadas con la gestión de estudiantes. Proporciona rutas para obtener todos los estudiantes, obtener un estudiante por su ID y modificar un estudiante existente.

**Ubicación:** `src/routes/studentRoutes.js`

### `studentAuthRoutes.js`

El archivo `studentAuthRoutes.js` en la carpeta `src/routes` maneja las rutas relacionadas con la autenticación de estudiantes. Proporciona rutas para registrar y autenticar estudiantes. La contraseña se almacena después de ser hasheada, y se devuelve una respuesta con el estudiante recién registrado o autenticado.

**Ubicación:** `src/routes/studentAuthRoutes.js`

### `studentRoutes.js`

El archivo `studentRoutes.js` en la carpeta `src/routes` contiene rutas relacionadas con la gestión de estudiantes. Proporciona rutas para obtener todos los estudiantes, obtener un estudiante por su ID, asignar un examen a un estudiante, ver un examen asignado y enviar respuestas de examen.

**Ubicación:** `src/routes/studentRoutes.js`

- **Registrar Estudiante:**

  - Método: `POST`
  - Ruta: `/register`
  - Descripción: Registra a un nuevo estudiante. La contraseña se hashea antes de almacenarla en la base de datos.

- **Iniciar Sesión de Estudiante:**

  - Método: `POST`
  - Ruta: `/login`
  - Descripción: Permite a un estudiante iniciar sesión mediante la verificación de credenciales. La contraseña ingresada se compara con la contraseña almacenada después de ser hasheada.

- **Obtener Todos los Estudiantes:**

  - Método: `GET`
  - Ruta: `/`
  - Descripción: Obtiene la lista de todos los estudiantes. Utiliza el método `populate` para obtener detalles de los exámenes asignados a cada estudiante.

- **Obtener Estudiante por ID:**

  - Método: `GET`
  - Ruta: `/:studentId`
  - Descripción: Obtiene un estudiante específico por su ID. Utiliza el método `populate` para obtener detalles de los exámenes asignados al estudiante.

- **Asignar Examen a Estudiante:**

  - Método: `POST`
  - Ruta: `/:studentId/assignExam/:examId`
  - Descripción: Asigna un examen específico a un estudiante. Verifica la existencia del estudiante y el examen, y garantiza que el estudiante no tenga ya asignado el examen.

- **Ver Examen Asignado a Estudiante:**

  - Método: `GET`
  - Ruta: `/:studentId/view-exam/:examId`
  - Descripción: Obtiene las preguntas de un examen asignado a un estudiante. Verifica si el estudiante y el examen existen antes de enviar el examen con sus preguntas al estudiante.

- **Enviar Respuestas de Examen:**

  - Método: `POST`
  - Ruta: `/:studentId/submitExam/:examId`
  - Descripción: Envía las respuestas de un estudiante para un examen específico. Verifica la existencia del estudiante y el examen, y asegura que el estudiante no haya presentado previamente el examen.

- **Obtener Resultado de Examen Entregado por Estudiante:**
  - Método: `GET`
  - Ruta: `/:studentId/results/:examId`
  - Descripción: Obtiene el resultado de un examen entregado por un estudiante.

Estos archivos definen las rutas de la aplicación y especifican las operaciones que se deben realizar en el servidor cuando se accede a esas rutas. Las rutas están diseñadas para interactuar con los modelos correspondientes y realizar operaciones en la base de datos MongoDB.

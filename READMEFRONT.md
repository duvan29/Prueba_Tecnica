<!-- @format -->

# Front de la Aplicación

El componente principal del frontend de la aplicación se encuentra en `App.jsx` en la carpeta `src`. Este archivo utiliza la biblioteca React y la herramienta de enrutamiento `react-router-dom` para gestionar las rutas y la navegación en la aplicación. A continuación, se proporciona una descripción del contenido de este archivo:

## Estructura de Componentes

### Página de Inicio

- **Ruta: `/`**
  - **Elemento: `<HomePage />`**
  - Página de inicio de la aplicación, que podría contener información general o enlaces a otras secciones.

### Inicio de Sesión de Estudiantes

- **Ruta: `/login/student`**
  - **Elemento: `<StudentLogin />`**
  - Página para que los estudiantes inicien sesión en la aplicación.

### Registro de Estudiantes

- **Ruta: `/register/student`**
  - **Elemento: `<RegistroEstudianteFormulario />`**
  - Página que muestra un formulario para el registro de nuevos estudiantes.

### Tablero del Estudiante

- **Ruta: `/dashboard/student/:studentId`**
  - **Elemento: `<StudentDashboard />`**
  - Página del tablero del estudiante, mostrando información y enlaces relevantes para el estudiante.

### Resolver Examen

- **Ruta: `/resolveExam/:studentId/:examId`**
  - **Elemento: `<ResolveExam />`**
  - Página que permite a los estudiantes resolver un examen específico.

### Resultados del Examen

- **Ruta: `/results/:studentId/:examId`**
  - **Elemento: `<ResultadosExam />`**
  - Página que muestra los resultados de un examen específico para un estudiante.

### Redirección

- **Ruta: `/*`**
  - **Elemento: `<Navigate to="/" />`**
  - Redirección a la página de inicio en caso de rutas no reconocidas.

## Estilos y Componentes Reutilizables

- **Estilos: `App.css`**
  - Archivo de estilos que se aplica a la aplicación.

## Navegación

El componente `Routes` de `react-router-dom` se utiliza para definir las rutas y sus elementos correspondientes. Cada `Route` especifica una ruta y el componente que debe renderizarse cuando la ruta coincida. La navegación se gestiona de manera declarativa y modular.

Este componente principal proporciona la estructura general del frontend, permitiendo una fácil expansión y modificación a medida que la aplicación crece. Cada ruta está asociada con un componente específico que encapsula la lógica y la interfaz de usuario para esa sección particular de la aplicación.

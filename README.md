# JD Flashcards

JD Flashcards es una aplicación de aprendizaje basado en tarjetas de memoria y repetición espaciada. Esta aplicación nace de la necesidad personal de aprender palabras en ingles 🗽 con tarjetas de memoria y tambien explorar 🔍 la librería ReactJS. Digamos que mientras voy construyendo 🧑‍💻 esta app para mi uso personal, voy aprendiendo React 👨‍🎓 y su ecosistema, a ello añadimos ciertas mejoras y nuevas funcionalidades con el tiempo :shipit:.

El repositorio actual alberga la parte frontend de la aplicación, la cual ha sido implementada utilizando React para la lógica de la interfaz y TailwindCSS para el diseño. Además, interactúa con un API Rest desarrollado en Laravel, ubicado en un repositorio separado, encargado de gestionar la lógica del backend

## Comenzando con Create React App

Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará si haces cambios.\
También podrás ver cualquier error de lint en la consola.

### `npm test`

Inicia el corredor de pruebas en el modo de observación interactivo.\
Consulta la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo producción y optimiza la construcción para obtener el mejor rendimiento.

La construcción se minimiza y los nombres de los archivos incluyen los hashes.\
Tu aplicación está lista para ser desplegada.

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.

### `npm run eject`

**Nota: esta es una operación de un solo sentido. Una vez que `eject`, ¡no puedes volver atrás!**

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes `eject` en cualquier momento. Este comando eliminará la única dependencia de construcción de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas ajustarlos. En este punto, estás por tu cuenta.

No tienes que usar nunca `eject`. El conjunto de características curadas es adecuado para despliegues pequeños y medianos, y no deberías sentirte obligado a usar esta característica. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para ello.

## Estructura de carpetas

* **components/**: Contiene todos los componentes reutilizables. Subdivididos en categorías como Auth para componentes específicos de autenticación, Shared para componentes compartidos como encabezados y pies de página, y UI para componentes de interfaz de usuario generales como botones y tarjetas.

* **views/**: Contiene los componentes de vista/página. 

* **context/**: Para el manejo de estados globales como la autenticación del usuario, puedes utilizar React Context.

* **hooks/**: Contiene tus hooks personalizados

* **services/**: Aquí colocas la lógica relacionada con la obtención de datos, como las llamadas a una API, servicios de autenticación (authService.js), y otros servicios relacionados

* **utils/**: Contiene archivos de utilidades como constantes (`constants.js`) y funciones de ayuda (`helpers.js`).

* **assets/**: Contiene todos los activos estáticos, como imágenes en `images/` y hojas de estilo en `styles/`.

* App.js: El componente raíz que utiliza todos los componentes de vistas y los envuelve con el contexto necesario.

* index.js: El punto de entrada de tu aplicación que renderiza `App.js`.

## Aprende Más

Puedes aprender más en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, revisa la [documentación de React](https://reactjs.org/).

### División de Código

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analizando el Tamaño del Bundle

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Creando una Aplicación Web Progresiva

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuración Avanzada

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Despliegue

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` falla al minimizar

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

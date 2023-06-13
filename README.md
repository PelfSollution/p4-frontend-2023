# Frontend en Typescript usando React

Se trata de hacer un _frontend_ usando React con Typescript. 

La API para este backend es una cualquiera, en el campus encontraréis un PDF con ejemplos de APIs curiosas, pero no es necesario usar una de esas, hay muchas más. Se trata de usar los datos de la API escogida (típicamente suelen ser APIs de solo lectura, o se puede escribir poco) y mostrarlos de una forma atractiva y hasta cierto punto interactiva.

La idea sería hacer dos rutas básicas. En la principial habría que mostrar una lista de cosas (películas, fotos de la NASA, libros, ...). Esa lista mostrará un extracto de entidades las que sean en formato lista o tabla. Al clicar uno de los ítems, debería irse a una ruta que muestre los detalles sobre esa entidad (si es una película, pues todos los detalles de la película, con el argumento, actores, etc.).

La mayoría de APIs suelen tener endpoints para listar lo más popular o buscar por algun concepto (no es necesario hacer búsqueda pero es interesante convertir la pantalla de la lista en una búsqueda simple). Y luego suele haber también otros endpoints para obtener toda la información de cierta entidad.

Si la API requiere tener un `API_KEY` o precido deberéis registraros y obtenerla. Si la API es de pago buscad una que os permita probar sin pagar con un límite de prueba razonable (algunas de fútbol solo permiten 100 peticiones al día, que es muy poco).

## Entregable

Como anteriormente, para hacer esta práctica hay que:
- Hacer un _fork_ de este repositorio.
- Trabajar en el _fork_ haciendo commits regularmente (una práctica que aparece entera en un solo commit tendrá una nota muy baja o cero, hay que mostrar todo el proceso intermedio).
- Al finalizar, se debe crear un `ZIP` del repositorio (que incluya el fichero `.env`!) y entregarlo en el [Campus Online de UPC School](https://talent.upc.edu) (habrá una tarea preparada para ello).

El entregable es el código del proyecto, incluyendo:
- El código completo del frontend.
- Si se necesia un `API_KEY`, habrá que ponerla en el fichero `.env`.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

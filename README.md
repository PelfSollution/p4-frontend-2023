# Popular Films [Just Watch] to React app (Frontend en Typescript usando React)
p4-backend-2023 by David AR

## Descripción

**PopularFilms-to-React**, es un ejercicio del [_Posgrado en Full-Stack Web Technologies_](https://www.talent.upc.edu/esp/estudis/formacio/curs/313400/posgrado-full-stack-web-technologies/ "Posgrado en Full-Stack Web Technologies"). Se basa en una migración a React de la práctica nº2 [PopularFilms-to-HTML](https://github.com/PelfSollution/PopularFilms-to-HTML). Popular Films [Just Watch] to HTML que fue desarrollado usando TypeScript para generar un sitio web estático. La versión original se encargaba de obtener la información de las películas desde la API de The Movie Database (TMDb) y creaba un archivo HTML principal con una lista de películas y archivos HTML individuales para cada película con más detalles.

La migración se realizó para obtener una experiencia práctica con React y para aprovechar las ventajas de las aplicaciones de página única (SPA) que ofrece esta biblioteca, como la capacidad de actualizar y renderizar eficientemente componentes específicos en la página en lugar de recargar la página completa.

El proyecto ahora utiliza React para generar una aplicación web dinámica, manteniendo la misma funcionalidad de mostrar una lista de películas populares y sus detalles. También se incluyen las funcionalidad typo Just Watch para ver en que plataformas se puede ver la película. Y la paginación tanto en la lista de peliculas como en el detalle de la película

Durante la migración, se realizó la transición de un enfoque estático a uno dinámico para mostrar los datos de las películas. Se implementó el uso de Hooks y Context para manejar el estado global de la aplicación, y se hizo uso de React Router para la navegación entre las vistas de la lista de películas y los detalles individuales de las películas.

## Información Extra

## Info de Create React App (CRA)

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

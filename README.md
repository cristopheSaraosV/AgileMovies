# AgileMovies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## ANOTACIONES AL REALIZAR LA PRUEBA

1) Tuve complicaciones al utilizar el refresh token, lo que implemente es que si al llamar un endpoint retorna un 401, el servicio hace una llamada a auth refresh y actualiza el toke, pero para ver los efectos hay que recargar la pagina, por tema de tiempo no pude finalizar esta seccion.
2) En el pdf no especifica si la inforcion del detalle debe ser solicitado nuevamante por el id, por lo cual lo mande como parametro para obtener su informacion.
3) En la seccion final de peliculas populares se encuentra un boton que actualiza la lista con los nuevos resultados.  
4) Implemente un guard que solamente valida que exista un token en el localstorage, de no existir se hare una redireccion al auth.
5) La implementacion de las interfaces la pude realizar gracias a quicktype.
6) Implemente lazy loading en el "app-routing.module.ts".
7) Utilize @input para poder mandar los datos a las componentes hijos.

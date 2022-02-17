# Tienda de prueba | Curso ReactJS 25925 | CoderHouse
Tienda desarrollada en ReactJS en el marco del curso.

## Release notes

### Clase 8 | Routing y Navegación | Primera Entrega del Proyecto Final
- Modificación del mock para que los datos contengan todos los parametros requeridos para realizar los filtros.
- Modificación de la función `getProducts()` en `AsyncMock.js` para aceptar en parametro `categoryName` y realizar el filtrado (`.find()`), ó si `categoryName` es `null` o `undefined` de devolveran todos los productos.
- Modificacion de la función `getProduct()` en `AsyncMock.js` para realizar filtro(`.find()`) basado en el parametro `id`.
- Instalación de la librería `react-router-dom` para realizar el manejo de las rutas.
- Modificación de `<AppNavbar />` eliminando funcines no usadas y adaptado al uso de los componentes de `react-router-dom`.
- Adaptación de `<CategorieItemButton />` al uso de los componentes de `react-router-dom`.
- Modifición de `App.cs`s incluyendo clases para reemplazar inline-styling.
- Limpieza de código: se eliminaron pruebas de funcionalidades de clases anteriores que no eran requeridas o necesarias.
- Arreglo de rutas de íconos .svg que se rompieron al aplicar routing.
- Cambio del componente `<NavLink />` de la libreria `reactstrap` por el de la librería `react-router-dom` y ajuste de clases CSS para mantener la estetica.
- Cambio estetico en `<CustomSpinner />`.
- Agregado de vinculo en `<Item />` para acceder a `<ItemDetail />` pasando el product ID como parametro.
- Se eliminaron importaciones no usadas en `<ItemCount />`.
- Cambios esteticos en `<ItemDetail />`.

[Ver cambios en GitHub](https://github.com/jcvels/tienda-online-pauvels/commit/0f0e7bd1228f265c4eeed5b2d6fd8ab83c46bbb1)

## Available Scripts
- `npm start`
- `npm test`
- `npm run build`

## Style Libraries 
- Boostrap v5.1.3
- Reactstrap v9.0.1

# Tienda de prueba | Curso ReactJS 25925 | CoderHouse
Tienda desarrollada en ReactJS en el marco del curso.

## Available Scripts
- `npm start`
- `npm test`
- `npm run build`

## Libraries 
- bootstrap *v5.1.3*
- reactstrap *v9.0.1*
- react-router-dom *v6.2.1*

## Release notes

## Clase 9 | Eventos | Sincronizar counter
- Agregado de función `getCategories` en `AsyncMock.js` para entregar informacion sobre categorias.
- Los datos de `AsyncMock.js` se importan desde `.json` para simplificar el archivo.
- Modificación de `Navbar.js` obtener las categorias desde `AsyncMonck.js`. Implementación de metodo `.map` para renderizar cada categoria.
- Creación de `CategorieItemSpinner.js` para mostrar un mensaje mienstras cargan las categorías.

### Clase 8 | Routing y Navegación | AfterClass 19/02
- Correcciones Clase 7
    - Inicializar `useState` con un objeto en vez de con un array en `ItemDetailContainer`.
    - Coincidir nombre del componente con nombre del archivo `itemDetail`.
- Nuevo componente `CustomAlert` para mostrar algunos mensajes.
- Condicional en `ItemListContainer` en caso de que `products` este vacio, sea null o undefined se muestra `CustomAlert`.
- Condicional en `ItemDetailContainer` en caso de que `product` sea null o undefined se muestra `CustomAlert`.

[Ver cambios detalle de cambios](https://github.com/jcvels/tienda-online-pauvels/commit/9e2c092fb452ba853eca25955cd8668ebb1b43f4)

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

[Ver cambios detalle de cambios](https://github.com/jcvels/tienda-online-pauvels/commit/0f0e7bd1228f265c4eeed5b2d6fd8ab83c46bbb1)

## To-Do List
- [X] Configurar categorías segun datos del AsyncMock.
- [ ] Aplicar criterios de Intercambiabilidad.

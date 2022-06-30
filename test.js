const Contenedor = require('./Contenedor.js');
// console.clear();

const productos = new Contenedor('contenedor.txt');

//Prueba del metodo save
productos.save({
title: 'Escuadra',
price: 14000,
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg'
});

//Pruea del getAll
// productos.getAll();

//probando el getById
//productos.getById(1);

//probando los productos
// productos.deleteById(2);

//probando deleteAll
// productos.deleteAll();

// productos.generateId();
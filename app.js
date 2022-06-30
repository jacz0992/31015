
const http = require('http')
const Contenedor = require('./Contenedor');
const express = require ('express')

const PORT = 8080;
const app = express();
const server = app.listen(process.env.PORT || PORT, () => console.log(`Servidor escuchando el puerto ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));


const productos = new Contenedor('contenedor.txt');

app.get('/productos', async (req, res) => {
    const mostrarProductos = await productos.getAll();
    res.send(mostrarProductos);
})

app.get('/productoRandom', async (req, res) => {
    const p = await productos.getAll();
    const numeroRandom = Math.floor(Math.random() * p.length);
    res.send(p[numeroRandom]);
})
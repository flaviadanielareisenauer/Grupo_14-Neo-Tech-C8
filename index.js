const express = require('express');
const app = express();
const path = require('path');
const port = 3500;

/* Middleware */
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/admin.html'))
})
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/carrito.html'))
})
app.get('/config-perfil', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/config-perfil.html'))
})
app.get('/login-registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login-registro.html'))
})
app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/producto.html'))
})
app.get('/total-productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/total-productos.html'))
})

/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`))
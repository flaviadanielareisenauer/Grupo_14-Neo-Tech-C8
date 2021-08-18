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
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productCart.html'))
})
app.get('/config-perfil', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/config-perfil.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
})
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productDetail.html'))
})
app.get('/formas-de-pago', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/formas-de-pago.html'))
})
app.get('/categorias', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/categorias.html'))
})

/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`))
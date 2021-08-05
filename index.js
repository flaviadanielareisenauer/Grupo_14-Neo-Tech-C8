const express = require('express');
const app = express();
const path = require('path');
const port = 3500;

/* Middleware */
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/admin.html'))
})
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productCard.html'))
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
app.get('/total-productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/total-productos.html'))

})

/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`))
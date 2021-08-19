const express = require('express');
const app = express();
const path = require('path');
const port = 3500;

const mainRoutes = require('./routes/mainRoutes');


/* Middleware */
app.use(express.static('./public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', mainRoutes);


/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`))
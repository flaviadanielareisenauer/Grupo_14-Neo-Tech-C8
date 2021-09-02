const express = require('express');
const app = express();
const path = require('path');
const port = 3500;
const methodOverride = require('method-override')

/*-------ENRUTADORES--------*/

let adminRouter = require('./routes/adminRouter');
let indexRouter = require('./routes/indexRouter');
let userRouter = require('./routes/userRouter');
let productsRouter = require('./routes/productsRouter');


/* Middleware */
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

/*--------VIEWS---------*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*---------RUTAS---------*/

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter)

/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`));
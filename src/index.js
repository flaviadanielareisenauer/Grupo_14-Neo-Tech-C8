const express = require('express');
const app = express();
const path = require('path');
const port = 3500;

/*-------ENRUTADORES--------*/

let adminRouter =require('./routes/admin')
let indexRouter =require('./routes/indexRouter')
let userRouter =require('./routes/user')


/* Middleware */
app.use(express.static('./public'));

/*--------VIEWS---------*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*---------RUTAS---------*/

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/user',userRouter);


/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`))
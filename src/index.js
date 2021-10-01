const express = require('express');
const app = express();
const path = require('path');
const port = 3500;
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const localsCheck = require('./middlewares/localsCheck');

/*-------ENRUTADORES--------*/

let adminRouter = require('./routes/adminRouter');
let indexRouter = require('./routes/indexRouter');
let userRouter = require('./routes/userRouter');
let productsRouter = require('./routes/productsRouter');


/* Middleware */
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: "NeoTech",
    resave: false,
    saveUninitialized: true,
}))
app.use(localsCheck)

/*--------VIEWS---------*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*---------RUTAS---------*/

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);

/* Servidor */
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\n http://localhost:${port}`));
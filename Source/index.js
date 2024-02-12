const express = require('express');

const app= express();
const path = require('path');
const cookieParser = require('cookie-parser');
const portEnv = process.env.PORT || 3000;

//Settings
app.set('port',portEnv);
let port = app.get('port');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));
app.engine('html',require('ejs').renderFile);


//Middlewhere


//Routes
app.use(cookieParser());
app.use(require('./Routes/api'));
app.use(require('./Routes/index'));




//Statci Files
//carpeta con archivos staticos que el navegador puede acceder
app.use(express.static(path.join(__dirname,'public')));


//Listening 
app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto", port);
});
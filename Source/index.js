const express = require('express');

const app= express();
const path = require('path');
const cookieParser = require('cookie-parser');
const portEnv = process.env.PORT || 3000;
const cors = require('cors');

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


// Enable All CORS Requests
app.use(cors());

// Set the Headers that Autoation ANywhere bot can access to my API

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
});


//Statci Files
//carpeta con archivos staticos que el navegador puede acceder
app.use(express.static(path.join(__dirname,'public')));


//Listening 
app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto", port);
});
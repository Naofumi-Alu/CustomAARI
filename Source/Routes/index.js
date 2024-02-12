const express = require('express');
const router = express.Router();


// Configura Express para analizar el cuerpo de la solicitud en formato JSON
router.use(express.json());

// Configura Express para analizar el cuerpo de la solicitud con datos codificados en URL
router.use(express.urlencoded({ extended: true}));

router.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'first Web Site',
        logoPath: '/img/AUTOMA_1.SVG'
    });
});

router.post('/submit', (req, res) => {
      // Aquí se procesan los datos recibidos
      // Obtener los datos procesados de la cookie
      console.log(req.body);// Imprime los datos recibidos en la consola del servidor
     
  
    res.render('contact.ejs', {
        title: 'first Web Site',
        logoPath: '/img/AUTOMA_1.SVG',
        dataProcessed: req.body
    });
});



module.exports = router;

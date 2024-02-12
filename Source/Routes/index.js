const express = require('express');
const router = express.Router();
const {storedData} = require('../controller/manageData.js');




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

router.post('/submit', async (req, res) => {
      // Aquí se procesan los datos recibidos
      // Obtener los datos procesados de la cookie
      console.log(req.body);// Imprime los datos recibidos en la consola del servidor
      
    try {
        const storeData = await storedData(req.body);

        res.render('contact.ejs', {
            title: 'first Web Site',
            logoPath: '/img/AUTOMA_1.SVG',
            dataProcessed: storeData
        });
        
    } catch (error) {
        console.error("Error al almacenar los datos", error);
    }
  
});




module.exports = router;


const express = require('express');
const {getGeneralData } = require('../controller/manageData.js');
const router = express.Router();



router.get('/data', async (req, res) =>{
    try {
        const data = getGeneralData ();
        
        //res.json(generalData);
        res.json(data);
    } catch (error) {
        res.status(500).send('Error al obtener los datos');
    }
});

module.exports = router;
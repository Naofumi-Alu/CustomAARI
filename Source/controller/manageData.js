let generalData = [];

 function  storedData (data) {
   // Aquí se implementaría la lógica para almacenar los datos
    // Por ahora, solo simularé que se almacenan y devuelvo un objeto
    // customiza mi objeto json de forma que tenga una propiedad principal data={}.
    data = {data: data};
    generalData.push(data);
    console.log('Almacenando datos:', data);
    return data;
}

function getGeneralData(){
    return generalData;
}

module.exports= {storedData,getGeneralData};

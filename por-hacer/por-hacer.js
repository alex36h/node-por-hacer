const fs = require('fs');


let listadoPorHacer = []
const GuardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);

    });


}

const CargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);

    } catch (error) {

        listadoPorHacer = [];
    }


}


const crear = (descripcion) => {

    CargarDB();

    let porHacer = {
        descripcion,
        completado: false,

    };

    listadoPorHacer.push(porHacer);
    GuardarDB();

    return porHacer;
}

const getListado = () => {
    CargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    CargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        GuardarDB();
        return true;

    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    CargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion != descripcion
    });

    if (listadoPorHacer.length === nuevoListado.lenght) {

        return false;
    } else {

        listadoPorHacer = nuevoListado;
        GuardarDB();
        return true;
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
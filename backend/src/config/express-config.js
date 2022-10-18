require('dotenv').config();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const express = require('express'); //chama a biblioteca instalada

(async () => {
    const database = require('../database/index');
    const Usuario = require('../models/Usuario');
    const Tarefa = require('../models/Tarefa');
 
    try {
        const resultado = await database.sync();
        const resultadoCreate = await Tarefa.create({
            name: 'mouse',
            deadline: 2022-10-10,
            subject: 'math'
        })
        console.log(resultadoCreate);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();



const app = express(); //faz uso da biblioteca instalada em uma constante pra ficar mais facil de chamar o express
app.use(cors(corsOptions));
module.exports = app;
require('dotenv').config();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const express = require('express'); //chama a biblioteca instalada

const app = express(); //faz uso da biblioteca instalada em uma constante pra ficar mais facil de chamar o express
app.use(cors(corsOptions));
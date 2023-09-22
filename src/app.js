//Apenas configurações do express e do banco de dados

import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';


db.on('error', console.error.bind(console, 'connection error')); //preview error
db.once('open', () => console.log('Conexão com o banco de dados realizada com sucesso!')); //open connection with db

const app = express();
app.use(express.json()); //middleware para o express entender o corpo da requisição em formato json

routes(app);//chama as rotas

export default app;
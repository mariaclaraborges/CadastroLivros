import express from 'express';
//importar as rotas de livros e autores
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import editoras from './editorasRoutes.js';

//centralizar todas as rotas 
const routes = (app) => { 
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Curso de NodeJS'});
    });
    
    app.use(//middleware para o express entender o corpo da requisição em formato json
        express.json(),
        livros, //rota de livros
        autores,
        editoras
    );
}

export default routes;


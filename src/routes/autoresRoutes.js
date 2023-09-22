import express from 'express';
import AutorController from '../controllers/autoresController.js';


const router = express.Router();

//pega todos os livros do metodo listarLivros do controller
router
.get("/autores", AutorController.listarAutores) //quando chamar a rota /livros com get, chama o método listarLivros do controller
.get("/autores/:id", AutorController.listarAutorPorId)
.post("/autores", AutorController.cadastrarAutor)
.put("/autores/:id", AutorController.atualizarAutor)
.delete("/autores/:id", AutorController.deletarAutor)

export default router; 

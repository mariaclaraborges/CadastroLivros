import express from 'express';
import LivroController from '../controllers/livrosController.js';


const router = express.Router();

//pega todos os livros do metodo listarLivros do controller
router
.get("/livros", LivroController.listarLivros) //quando chamar a rota /livros com get, chama o método listarLivros do controller
.get("/livros/:id", LivroController.listarLivroPorId)
.post("/livros", LivroController.cadastrarLivro)
.put("/livros/:id", LivroController.atualizarLivro)
.delete("/livros/:id", LivroController.deletarLivro)

export default router; 

//64f093cf8b02f59138a91a1e
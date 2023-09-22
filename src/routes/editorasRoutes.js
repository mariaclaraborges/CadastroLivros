import express from 'express';
import EditoraController from '../controllers/editorasController.js';


const router = express.Router();

//pega todos os livros do metodo listarLivros do controller
router
.get("/editoras", EditoraController.listarEditoras) //quando chamar a rota /livros com get, chama o método listarLivros do controller
.get("/editoras/:id", EditoraController.listarEditoraPorId)
.post("/editoras", EditoraController.cadastrarEditora)
.put("/editoras/:id", EditoraController.atualizarEditora)
.delete("/editoras/:id", EditoraController.deletarEditora)

export default router; 

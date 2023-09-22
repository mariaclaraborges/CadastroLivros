import autores from '../models/Autor.js';

//Aqui utiliza-se a versão mais recente do mongoose, com o uso de async/await 

class autoresController{ //classe para controlar as requisições
    //listar todos os autores
    static listarAutores = async (req, res) => {
        try{
            const listaAutores = await autores.find(); 
            res.json(listaAutores);
        }
        catch(err){
            console.log(err);
        }    
    }
    static listarAutorPorId = async (req, res) => {
        try{
            const id = req.params.id;
            const autor = await autores.findById(id);
            res.status(201).json(autor);
        }
        catch(err){
            res.status(500).send({message: `Erro ao encontrar o autor ${err.message}`});
        }
    }

    static cadastrarAutor = async (req, res) => {
        try{
            const autor = new autores(req.body); //novo autor de acordo com o modelo definido em autoreschema
            await autor.save(); //await para esperar o autor ser salvo antes de retornar
            res.status(201).send(autor.toJSON()); //retorna o autor cadastrado
        }
        catch(err){
            res.status(500).send({message: `Erro ao cadastrar o autor ${err.message}`});
        }
    }

    static atualizarAutor = async (req, res) => {
        
        try{
            const id = req.params.id; //pega o id do autor no endereço da rota a ser atualizado
            await autores.findByIdAndUpdate(id, { $set: req.body }); //atualiza o autor de acordo com o id e o corpo da requisição
            //findByIdAndUpdate é uma função do mongoose que busca o autor pelo id e atualiza os dados
            res.status(200).send({message: `Autor atualizado com sucesso`});
        }

        catch(err){
            res.status(500).send({message: `Erro ao atualizar o autor ${err.message}`});
        }
    }

    static deletarAutor = async (req, res) => {
        try{
            const id = req.params.id;
            await autores.findByIdAndDelete(id); 
            res.status(200).send({message: `Autor deletado com sucesso`});
        }
        catch(err){
            res.status(500).send({message: `Erro ao deletar o autor ${err.message}`});
        }
    }
}

export default autoresController;
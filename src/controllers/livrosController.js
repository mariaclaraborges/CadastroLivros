import livros from '../models/Livro.js';

//Aqui utiliza-se a versão mais recente do mongoose, com o uso de async/await 

class LivroController{ //classe para controlar as requisições
    //listar todos os livros
    static listarLivros = async (req, res) => {
        try{
            const listaLivros = await livros.find()
            .populate('autor') //popula o campo autor com os dados do autor (nome, nacionalidade)
            .populate('editora') //popula o campo editora com os dados da editora (nome, fundacao)
            .exec() //executa a query
            ; 
            res.json(listaLivros);
        }
        catch(err){
            console.log(err);
        }    
    }
    static listarLivroPorId = async (req, res) => {
        try{
            const id = req.params.id;
            const livro = await livros.findById(id)
            .populate('autor', 'nome') //segundo parâmetro é para especificar quais campos do autor serão populados
            .populate('editora', 'nome') //segundo parâmetro é para especificar quais campos da editora serão populados
            .exec();
            res.status(201).json(livro);
        }
        catch(err){
            res.status(500).send({message: `Erro ao encontrar o livro ${err.message}`});
        }
    }

    static cadastrarLivro = async (req, res) => {
        try{
            const livro = new livros(req.body); //novo livro de acordo com o modelo definido em livroSchema
            await livro.save(); //await para esperar o livro ser salvo antes de retornar
            res.status(201).send(livro.toJSON()); //retorna o livro cadastrado
        }
        catch(err){
            res.status(500).send({message: `Erro ao cadastrar o livro ${err.message}`});
        }
    }

    static atualizarLivro = async (req, res) => {
        
        try{
            const id = req.params.id; //pega o id do livro no endereço da rota a ser atualizado
            await livros.findByIdAndUpdate(id, { $set: req.body }); //atualiza o livro de acordo com o id e o corpo da requisição
            //findByIdAndUpdate é uma função do mongoose que busca o livro pelo id e atualiza os dados
            res.status(200).send({message: `Livro atualizado com sucesso`});
        }

        catch(err){
            res.status(500).send({message: `Erro ao atualizar o livro ${err.message}`});
        }
    }

    static deletarLivro = async (req, res) => {
        try{
            const id = req.params.id;
            await livros.findByIdAndDelete(id); 
            res.status(200).send({message: `Livro deletado com sucesso`});
        }
        catch(err){
            res.status(500).send({message: `Erro ao deletar o livro ${err.message}`});
        }
    }
}

export default LivroController;
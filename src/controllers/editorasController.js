import editoras from '../models/Editora.js';

//Aqui utiliza-se a versão mais recente do mongoose, com o uso de async/await 

class EditoraController{ //classe para controlar as requisições
    //listar todos os editoras
    static listarEditoras = async (req, res) => {
        try{
            const listaEditoras = await editoras.find();
            res.json(listaEditoras);
        }
        catch(err){
            console.log(err);
        }    
    }
    static listarEditoraPorId = async (req, res) => {
        try{
            const id = req.params.id;
            const editora = await editoras.findById(id);
            res.status(201).json(editora);
        }
        catch(err){
            res.status(500).send({message: `Erro ao encontrar a editora ${err.message}`});
        }
    }

    static cadastrarEditora = async (req, res) => {
        try{
            const editora = new editoras(req.body); //novo Editora de acordo com o modelo definido em editoraschema
            await editora.save(); //await para esperar o Editora ser salvo antes de retornar
            res.status(201).send(editora.toJSON()); //retorna o Editora cadastrado
        }
        catch(err){
            res.status(500).send({message: `Erro ao cadastrar a editora ${err.message}`});
        }
    }

    static atualizarEditora = async (req, res) => {
        
        try{
            const id = req.params.id; //pega o id da Editora no endereço da rota a ser atualizado
            await editoras.findByIdAndUpdate(id, { $set: req.body }); //atualiza o Editora de acordo com o id e o corpo da requisição
            //findByIdAndUpdate é uma função do mongoose que busca o Editora pelo id e atualiza os dados
            res.status(200).send({message: `Editora atualizado com sucesso`});
        }

        catch(err){
            res.status(500).send({message: `Erro ao atualizar o Editora ${err.message}`});
        }
    }

    static deletarEditora = async (req, res) => {
        try{
            const id = req.params.id;
            await editoras.findByIdAndDelete(id); 
            res.status(200).send({message: `Editora deletado com sucesso`});
        }
        catch(err){
            res.status(500).send({message: `Erro ao deletar a editora ${err.message}`});
        }
    }
}

export default EditoraController;
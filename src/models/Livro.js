import mongoose from "mongoose";

const livroSchema = mongoose.Schema(
    {
    id: {type:String},
    titulo: {type:String, required:true},
    autor: {type:mongoose.Schema.Types.ObjectId, ref: 'autores', required:true}, //referencia o id do autor
    editora: {type:mongoose.Schema.Types.ObjectId, ref: 'editoras', required:true}, //referencia o id da editora
    numeroPaginas: {type:Number}
    }
);

const livros = mongoose.model('livros', livroSchema);//livros é o nome da coleção no banco de dados, livroSchema é o schema que será utilizado para criar os documentos

export default livros;
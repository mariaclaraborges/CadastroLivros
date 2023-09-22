import mongoose from "mongoose";

const editoraSchema = mongoose.Schema(
    {
        id: {type:String},
        nome: {type:String, required:true},
        fundacao: {type:Number}
    },
    {
        versionKey: false//para não criar o campo __v no banco de dados 
    }
);
const editoras = mongoose.model('editoras', editoraSchema);//autores é o nome da coleção no banco de dados, autorSchema é o schema que será utilizado para criar os documentos

export default editoras;

//64f0aa0b43a402edbc79760a id suma
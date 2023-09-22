import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
    {
        id: {type:String},
        nome: {type:String, required:true},
        nacionalidade: {type:String}
    },
    {
        versionKey: false//para não criar o campo __v no banco de dados 
    }
);
const autores = mongoose.model('autores', autorSchema);//autores é o nome da coleção no banco de dados, autorSchema é o schema que será utilizado para criar os documentos

export default autores;
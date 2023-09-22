bancos relacionais utilizam tabelas e linhas para armazenar os dados
bancos não-relacionais, como MongoDB, utiliza documentos.
BSON - Binary JSON: Data, Int64, Binary

Mongoose é uma biblioteca de modelagem de dados orientada a objetos para o Node.js, que fornece uma camada abstrata sobre o MongoDB, um banco de dados NoSQL. O Mongoose facilita o trabalho com dados do MongoDB, fornecendo uma API consistente e fácil de usar para criar, ler, atualizar e excluir documentos.

MVC - Model View Controller (Padrão arquitetura)
A rota redireciona para o Controller que vai definir o que será feito com os dados enviados.  Implementação do método.
Após ocorrer validações prévias para ver se está tudo certo com os dados enviados, esses vão para o model.
Model é responsável pelos dados, vai fazer todas as conexões com as bases de dados, vai enviar e receber dados. Também é responsável pelas regras de negócio.
View é o que nós vemos

O modelo de arquitetura REST incorpora vários princípios para garantir o padrão na construção de aplicações WEB. 
Importante ter utilização dos verbos http.


se acontecer uma requisição post para a rota livros ele tem que chamar o metodo cadastrar livro

A função findByIdAndUpdate é um método fornecido pelo ODM (Object-Document Mapping) do MongoDB chamado Mongoose. O Mongoose é uma biblioteca do Node.js que fornece uma camada de abstração sobre o MongoDB, facilitando a interação com o banco de dados através de objetos e modelos.

O método findByIdAndUpdate é usado para atualizar um documento no MongoDB com base em seu ID. 
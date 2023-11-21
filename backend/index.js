'use strict';

// importamos o express
const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

// inicializa servidor web 
const app = express();

// configurar a porta do servidor
const PORT = 3000;

// escutando a porta 
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
})

// utilizamos middleware pra trabalhar com json. 
app.use(express.json());
app.use(cors());


const tarefas = [
    {
        id: crypto.randomUUID(),
        title: 'Estudar NodeJS',
        prazo: '2 dias'
    },
    {
        id: crypto.randomUUID(),
        title: 'Ler livro de JavaScript',
        prazo: '5 dias'
    },
    {
        id: crypto.randomUUID(),
        title: 'Fazer um curso de React Native',
        prazo: '7 dias'
    }
]


// =======rotas======== // 
// API - REST => GET / POST / PUT / DELETE ou bem CRUD => CREATE / READ / UPDATE / DELETE

// rota raiz
app.get('/', (req, res) => {
    console.log(req)
    res.send('Hi pipol');
});

// rota das terefas cadastradas 
app.get('/tarefas', (req, res) => {
    res.send(tarefas);
})

// rota de tarefa especifica
app.get('/tarefas/:id', (req, res) => {
    // acessar o parametro na url 
    const idParam = req.params.id;

    // encontramos a tarefa segundo o seu ID
    const tarefa = tarefas.find((tarefa) => tarefa.id == idParam)

    // enviamos a tarefa para o cliente
    res.send(tarefa);
})
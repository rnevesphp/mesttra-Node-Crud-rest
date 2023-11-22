const doc = document;

const tarefasHTML = doc.getElementById('tarefas');




const APICall = fetch('http://localhost:3000/tarefas');



console.log(APICall);

APICall.then((response) => {
    console.log(response)
    return response.json()
})

    .then((tarefas) => {
        console.log(tarefas);

        tarefas.map((tarefa) => {

            tarefasHTML.insertAdjacentHTML('beforeend', `<li>
                    <p>${tarefa.title}</p>
                    <p>${tarefa.prazo}</p>
                </li>`
            )
        })
    })
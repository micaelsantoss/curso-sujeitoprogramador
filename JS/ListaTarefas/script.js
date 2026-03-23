let listElement = document.querySelector("#app ul");
let buttonElement = document.querySelector("#app button");
let inputElement = document.querySelector("#app input");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function adicionarTarefa(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa!");

        return false
    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}

function renderTarefas(){
    listElement.innerHTML = '';
    
    tarefas.map((todo)=>{
       let liElement = document.createElement("li");
       let tarefaText = document.createTextNode(todo);

       let linkElement = document.createElement("a");
       linkElement.setAttribute("href", "#")

       let linkTest = document.createTextNode("Excluir");
       linkElement.appendChild(linkTest)

       let posicao = tarefas.indexOf(todo);

       linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

       liElement.appendChild(tarefaText);
       listElement.appendChild(liElement);
       liElement.appendChild(linkElement);
       
    })
}

renderTarefas(); 

buttonElement.onclick = adicionarTarefa;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);

    renderTarefas();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas) )
}
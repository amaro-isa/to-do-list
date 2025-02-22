//vsc - aula 49 (yt - aulas 52, 53, 54)

//função que adiciona tarefa
function addTask() {
    //TITULO DA TAREFA
    const taskTitle = document.querySelector("#task-title").value;
if(taskTitle) {
    //clonar o template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);

    //adicionar titulo
    newTask.querySelector(".task-title").textContent = taskTitle;

    //remover as classes desnecessarias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    //adicionar tarefa na lista
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);

    //adicionar evento de remover
const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
    removeTask(this);

});

//adicionar evento de completar tarefa
const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
completeTask(this);
});

    //limpar texto
    document.querySelector("#task-title").value = " ";
}

}

//função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//função d completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
    //toggle - confere se o elemento tem a classe, se nao tiver ele coloca e se tiver ele remove.
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {
e.preventDefault();
addTask();
});




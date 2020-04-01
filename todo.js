const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList");

const TODOLS = "toDo";

let toDo = [];

function deleteToDo(event){
    const button = event.target;
    const li = button.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDo.filter(function(toDos){
        return toDos.id !== parseInt(li.id);
    });
    toDo = cleanToDo;
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(TODOLS,JSON.stringify(toDo));
}

function paintToDo(text){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDo.length + 1;
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    li.className = "li";
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    }
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadTodo(){
    const loadedToDo = localStorage.getItem(TODOLS);
    if (loadedToDo !== null){
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDos){
            paintToDo(toDos.text);
        });
    }
}



function init(){
    loadTodo();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();
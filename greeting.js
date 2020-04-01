const form = document.querySelector(".js-form"),
    USERLS = "currentUser",
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    SHOWING = "showing";

function saveName(text){
    localStorage.setItem(USERLS,text);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit",handleSubmit);
 
}

function paintGreeting(text){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USERLS);
    if (currentUser === null){
        askForName();

    }else{
        paintGreeting(currentUser);
    }
}

function init(){

    loadName();
}

init();

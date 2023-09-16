const inputBox = document.querySelector(".add-items-input");
const listContainer = document.querySelector(".list-container");

function saveTask(){
    localStorage.setItem("listContainer",listContainer.innerHTML);
}

function loadTask(){
    if(localStorage.getItem("listContainer")){
        listContainer.innerHTML=localStorage.getItem("listContainer");
    }
}

function addTask(){
    if (inputBox.value === '') {
        return;
    }else{
        let li=document.createElement("li");
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        inputBox.value="";
        let span=document.createElement("span");
        span.innerText="\u00D7";
        li.appendChild(span);

        li.addEventListener("click",function(){
            li.classList.toggle("checked");
            saveTask();
        });

        span.addEventListener("click",function(){
            li.remove();
            saveTask();
        });
        saveTask();
    }
}


loadTask(); 
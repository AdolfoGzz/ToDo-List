const inputBox = document.querySelector(".add-items-input");
const listContainer = document.querySelector(".list-container");

function saveTask() {
    localStorage.setItem("listContainer", listContainer.innerHTML);
}

function loadTask() {
    if (localStorage.getItem("listContainer")) {
        listContainer.innerHTML = localStorage.getItem("listContainer");

        // Attach event listeners to the loaded tasks
        const tasks = listContainer.querySelectorAll("li");
        tasks.forEach((task) => {
            task.addEventListener("click", function () {
                task.classList.toggle("checked");
                saveTask();
            });

            const span = document.createElement("span");
            span.innerText = "\u00D7";
            span.addEventListener("click", function () {
                task.remove();
                saveTask();
            });

            task.appendChild(span);
        });
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

function checkInputLength() {
    const inputText = inputBox.value;
    const messageElement = document.querySelector(".input-message");

    if (inputText.length > 35) {
        messageElement.textContent = "Input exceeds 35 characters.";
    } else {
        messageElement.textContent = "";
    }
}


loadTask(); 
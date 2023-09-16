const inputBox = document.querySelector(".add-items-input");
const listContainer = document.querySelector(".list-container");

function addTask(){
    if (inputBox.value === '') {
        return;
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        inputBox.value="";
    }
}
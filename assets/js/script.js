let line = document.getElementsByClassName("line");
let listTask = document.getElementById("list-task");
let input = document.getElementById("input");
let isRemoved = false;
let number = 0;



function addTask() {
    let inputValue = document.getElementById("inputTask").value;
    number++;
    listTask.innerHTML +=
        `<div class="line">
            <span onclick="removeTask(${number})" class="number">▢ ${number}.</span>
            ${inputValue} 
            <span class="task"></span> 
            <span class="clear" onclick="clearTask(this)">x</span>
            <hr />
        </div>`;

    document.getElementById("inputTask").value = "";
    // ! RIMUOVE LE RIGHE DI TROPPO
    if (input.children.length > 3){
    input.removeChild(input.lastChild);
    input.removeChild(input.lastChild);
    }
}

function addTaskEnter(event) {
    let key = event.keyCode;
    if (key==13){
        addTask();
     }
}

function removeTask(task) {
    line[task-1].classList.toggle("del");
}

function clearTask(n) {
    // line[n].innerHTML = "";
    number--;
    n.parentNode.remove();
    let numbers = document.getElementsByClassName("number");
    for(num of numbers) {
        for (i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = `▢ ${i+1}.`
            
        }
    }
    
    input.innerHTML += 
        `<div class="blank-line-after">
            &nbsp;
            <hr />
        </div>`
}

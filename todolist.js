// Reference to id , class in file HTML

let listItem = document.getElementsByClassName('list__item');
let buttonAdd = document.getElementById('add__task');
let inputTask = document.getElementById('task');
let todolist = document.getElementById('todolist');

// Create array contain tasks and variable count id
let listTask = [];
let countID = 0;

buttonAdd.addEventListener('click',addTask);


// Add element when click add button
function addTask(){
    let element = inputTask.value;
    element = element.trim();
    if(element !== ''){
        const task = {
            text : element,
            checked : false,
            id : countID
        };
        listTask.push(task);
        countID++;
        inputTask.value = '';
        inputTask.focus();
        render();
        console.log(countID);
    }
}


// Create button checked before
function createButtonChecked(){
    let buttonChecked = document.createElement('span');
    buttonChecked.classList.add('button');
    return buttonChecked;
}

// Create button delete after
function createButtonRemove(id){
    // Create element button and icon
    let buttonRemove = document.createElement('span');
    let iconRemove = document.createElement('i');

    // Add class icon and append icon for child
    iconRemove.classList.add('fa');
    iconRemove.classList.add('fa-trash');
    buttonRemove.appendChild(iconRemove);

    // Add button + icon
    buttonRemove.classList.add('button__remove');
    buttonRemove.setAttribute('id','remove_' + id);

    buttonRemove.addEventListener('click',function(){
        // listTask.splice(id,1);
        let count = 0;
        for(let task of listTask){
            task.id = count;
            count ++;
        }
        // todolist.removeChild(todolist.childNodes[id]);
        listItem[id].style.display = 'none';
        console.log(listTask[i]);
        console.log(listTask);
    });
    
    console.log('Button Remove : ',buttonRemove);
    return buttonRemove;
}

function renderElement(task){
    // Create new HTML element
    let newElement = document.createElement('li');

    newElement.appendChild(createButtonChecked());



    // Add content text of HTML element
    let contentTask = document.createTextNode(task.text);
    newElement.appendChild(contentTask);

    // Add class for it
    newElement.classList.add('list__item');

    // Add event when user click done task
    newElement.addEventListener('click',function(){
        newElement.classList.toggle('checked');
        task.checked = !task.checked;
    })

    
    newElement.appendChild(createButtonRemove(task.id));

    return newElement;
}

// Render all task of to do list
function render(){
    todolist.innerHTML = '';

    for(let task of listTask){

        let newElement = renderElement(task);

        // Add element and display it
        todolist.appendChild(newElement);
    }
    console.log('Todolist : ', todolist);
}

render();
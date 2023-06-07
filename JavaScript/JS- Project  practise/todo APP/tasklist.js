let form = document.querySelector('#form-task');
let allTask = document.querySelector('ul'); //ul
let AddTask = document.querySelector('#AddTask'); //btn addTask
let filter = document.querySelector('#filter');
let clearTask = document.querySelector('#clearAllTask');

//Event listener
form.addEventListener('submit',addTask);
clearTask.addEventListener('click',clearAllTask);
allTask.addEventListener('click',removeSingleTask);
filter.addEventListener('keyup',filterTask);
document.addEventListener('DOMContentLoaded',LSreadTask())


//Define Function: 

//Add Task: 
function addTask(e){
    e.preventDefault();
    if(AddTask.value == ''){
        alert('Plz input Task!')
    }
    else{
        
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(AddTask.value+ " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.appendChild(document.createTextNode('[x]'));
        link.style.textDecoration = 'none';
        li.appendChild(link);
        allTask.appendChild(li);

        //send task to Local Storage: 
        LSaddTesk(AddTask.value);

        AddTask.value="";

        


    }
    
}

//remove single task: 

function removeSingleTask(e){
    let rmElement =e.target.parentElement;
    rmElement.remove();
    LSsingleTaskDelete(rmElement);


}

//Clear All Task:

function clearAllTask(e){
    allTask.remove();
    LSclearAll();
}

//filter Task: 


function filterTask(e){
    let findText = filter.value.toLowerCase();
  

    let tasks = document.querySelectorAll('li');
    tasks.forEach((item) => {
        let element = item.firstChild.textContent;
        
        if(element.toLowerCase().indexOf(findText)!= -1){
            item.style.display= 'block';
        }
        else{
            item.style.display= 'none';
        }
        
    });
   

}

//Local Storage: ---------------------------------

function LSaddTesk(AddTask){
    
    let tasks;
    if(localStorage.getItem('tasks') ===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(AddTask);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function LSreadTask(){
    let tasks;
    if(localStorage.getItem('tasks') ===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }


    //*** don't forget to use Loop either all tasks show in one li> tags. */
    tasks.forEach(task=>{
        // console.log(tasks);
        //add the task to ul>li: 
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task +" "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.appendChild(document.createTextNode('[x]'));
        link.style.textDecoration = 'none';
        li.appendChild(link);
        allTask.appendChild(li);
        
    });
    
}

//clear All tasks from LS : 

function LSclearAll(){
    localStorage.clear();
}

//clear single element from task: 

function LSsingleTaskDelete(rmItem){
    // console.log(element);

    let tasks;
    if(localStorage.getItem('tasks') ===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = rmItem;
    li.removeChild(li.lastChild);
    // console.log(li.textContent.trim());

    tasks.forEach((element,index) => {
        // console.log(element.trim());

        if(li.textContent.trim()===element){
            // console.log(element);
            tasks.splice(index,1);

        }
        
    });

    // console.log(tasks)
    localStorage.setItem('tasks',JSON.stringify(tasks))

    

}





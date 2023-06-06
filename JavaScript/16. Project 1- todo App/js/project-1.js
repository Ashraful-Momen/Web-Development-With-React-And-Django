//Define UI : element = > 

let form = document.querySelector("#task_form");
let taskList = document.querySelector('ul'); 
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");


// Define Event Listener: 
form.addEventListener('submit', addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',deleteAllTask);
filter.addEventListener('keyup',filterTask)
document.addEventListener('DOMContentLoaded',getTaskLocalStorage)

//Define Add Function: 

//Add Task: 
function addTask(e){
    e.preventDefault(); // if reload the page then task not add // when click submit then page auto reload ... for fix : use => e.preventDefault() <- this function can't reload the page .
    if(taskInput.value === ''){
        alert('Add Task');
    }
    else{
        
        //create a li Element:
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value," "));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML='[x]';
        link.style.textDecoration= 'none';
        li.appendChild(link);

        taskList.appendChild(li);

        storeTaskInLoacalStorage(taskInput.value); // store task in local storage...

        taskInput.value = ""; // ******************** not use space here then , item not delete from local storage ....()
        
    }

    e.preventDefault();
  
}

//Remove Task: 

function removeTask(e){
    if (e.target.hasAttribute('href'))  //*** Here hasAttribute('href') , specifically select the ul> li > a ...  */
    {
        if(confirm("Do you want to delete ?"))
       {
        let deleteElement = e.target.parentElement;
        deleteElement.remove();
        removeTaskLS(deleteElement);
        
       }
    }

    

    


}

// deleteAllTask: clear

function deleteAllTask(e){
    
    if(confirm("Are you sure to delete all Task!")){
        taskList.remove();
    }

    localStorage.clear();
   
}

//filterTask: 

function filterTask(e){
    
    let findText = e.target.value.toLowerCase() // get data from <fileter input>

    document.querySelectorAll('li').forEach((task)=>{  // <li></li> element iterate by task.
        let item = task.firstChild.textContent;  // every <li>text content</li>

        if(item.toLocaleLowerCase().indexOf(findText) != -1 ){  // !=-1 mean condition true: item text found in findText which is condition : 1.
            task.style.display= 'block'; 
        }
        else{
            task.style.display='none';
        }
        
    })
    
}

//Local Storage: --------------------------------------

//AddTask:





function storeTaskInLoacalStorage(task){

   

    let tasks;
   
    if(localStorage.getItem('tasks') === null){
       
        tasks = []; // assiagn task = [] , an emty array.
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks')); // if not empty then get , task =[previous element] into data
        
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}
//Read:---------------------------------------
function getTaskLocalStorage(){

    
    let tasks;
   
    if(localStorage.getItem('tasks') === null){
       
        tasks = []; // assiagn task = [] , an emty array.
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks')); // if not empty then get , task =[previous element] into data
        
    }

    tasks.forEach((task)=>{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML='[x]';
        link.style.textDecoration= 'none';
        li.appendChild(link);

        taskList.appendChild(li);
        
    })

   
   
}


// Delete single Task from Local storage :------------------------


function removeTaskLS(rmElement){
    // console.log(removeTask);

    let tasks;

    if(localStorage.getItem('tasks') === null){
       
        tasks = []; // assiagn task = [] , an emty array.
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks')); // if not empty then get , task =[previous element] into data
        
    }

    let li = rmElement;
   
    li.removeChild(li.lastChild);

    

    // console.log(li.lastChild); //check what actually delete ... li > delete -> "a[x]". = > <li>task name will stay after delete...</li
    // console.log(li);
    // let check = li.textContent.trim(); // this li.trim() will remove 'li' tag ... jsut get = > taskName.
    // console.log(check);

        
    
    tasks.forEach((task, index)=>{
       
        if(li.textContent.trim() === task){
            
            
            tasks.splice(index,1); // delete those item from local storage ... array ... splice(starting_index,0->not delete or '1/2'->delete '1/2' element, 'add more item', 'add more item');
           
        }
    })

    localStorage.setItem('tasks',JSON.stringify(tasks));

    // console.log(tasks)


}

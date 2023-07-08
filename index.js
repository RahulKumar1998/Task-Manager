let tasks = []
console.log(tasks)
tasks = JSON.parse(localStorage.getItem('tasks'))

const addTask = () => {
    let name = document.querySelector('#task-name').value
    let desc = document.querySelector('#task-desc').value

    if (localStorage.getItem('tasks') == null) {
        tasks = []
        tasks.push([name, desc]);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push([name, desc]);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    updateTasks()

}



const updateTasks = () => {
    taskContainer = document.getElementById('tasks')
    tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks != null) {
        str = ''
        tasks.forEach((tasks,index) => {
            // taskContainer.appendChild()

            str += `
           <div class="card my-4" style="width: 18rem;">
                ${index+1}
           <div class="card-body">
               <h5 class="card-title">${tasks[0]}</h5>
               <p class="card-text">${tasks[1]}</p>
               <button onclick="deleteTask(${index})" class="btn btn-danger">Delete</button>
           </div>
       </div>
           `
        });
        taskContainer.innerHTML = str;

    }
}


const deleteTask = (index)=>{
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.splice(index,1)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    updateTasks()
}

updateTasks()
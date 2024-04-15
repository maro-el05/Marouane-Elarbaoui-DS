document.addEventListener('DOMContentLoaded', function(){
    function accomplir(){
        let a = document.querySelectorAll(".completeTask");
        a.forEach(button => {
            button.addEventListener('click', function(){
                alert("Cette tâche est accomplie");
            });
        });
    }

    function deleteTask() {
        let d = document.querySelectorAll(".deleteTask");
        
        d.forEach(button => {
            button.addEventListener('click', function() {
                let task = this.parentElement.parentElement;
                task.remove();
            });
        });
    }

    function addTask(taskName){
        let td = document.getElementById("todoList");
        let n = document.createElement("div");
        
        n.innerHTML = `
            <span> ${taskName}</span>
            <div>
                <button class="completeTask">Accomplir</button>
                <button class="deleteTask">Supprimer</button>
            </div>`;
        td.appendChild(n);
        
    
        accomplir();
        deleteTask();
    }

    accomplir();
    deleteTask();

    document.getElementById("addTaskForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        let taskName = document.getElementById("taskName").value;
        addTask(taskName);
        document.getElementById("taskName").value = ""; 
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            // Adiciona evento de clique para marcar/remover tarefa
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            taskList.appendChild(li);
            taskInput.value = "";
        } else {
            alert("Por favor, digite uma tarefa.");
        }
    }

    addTaskBtn.addEventListener("click", addTask);
    
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});

// Select elements
const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('taskList');

// Add task to the list
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

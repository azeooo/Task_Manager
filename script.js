document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTask = {
            id: Date.now(),
            title: taskForm.title.value,
            description: taskForm.description.value,
            dueDate: taskForm.dueDate.value,
            priority: taskForm.priority.value,
            completed: false
        };
        tasks.push(newTask);
        taskForm.reset();
        renderTasks();
    });

    function renderTasks(filter = 'all') {
        taskList.innerHTML = '';
        let filteredTasks = tasks;
        if (filter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filter === 'pending') {
            filteredTasks = tasks.filter(task => !task.completed);
        } else if (['high', 'medium', 'low'].includes(filter)) {
            filteredTasks = tasks.filter(task => task.priority === filter);
        }
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.classList.add(task.priority);
            if (task.completed) li.classList.add('completed');
            li.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Due: ${task.dueDate}</p>
                <p>Priority: ${task.priority}</p>
                <button onclick="toggleComplete(${task.id})">${task.completed ? 'Unmark' : 'Mark'} as Completed</button>
                <button onclick="editTask(${task.id})" class="edit">Edit</button>
                <button onclick="deleteTask(${task.id})" class="delete">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }

    window.toggleComplete = (id) => {
        const task = tasks.find(task => task.id === id);
        task.completed = !task.completed;
        renderTasks();
    };

    window.editTask = (id) => {
        const task = tasks.find(task => task.id === id);
        taskForm.title.value = task.title;
        taskForm.description.value = task.description;
        taskForm.dueDate.value = task.dueDate;
        taskForm.priority.value = task.priority;
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    };

    window.deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    };

    window.filterTasks = (filter, button) => {
        renderTasks(filter);

        // Remove 'active' class from all buttons
        const buttons = document.querySelectorAll('.task-list button');
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');
    };

    window.showAboutPage = () => {
        window.location.href = 'about.html';
    };
});

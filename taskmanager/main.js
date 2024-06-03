const taskListElement = document.getElementById('task-list');

function renderTasks(tasks) {
  taskListElement.innerHTML = tasks.map(task => `
    <li data-id="${task.id}">
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      <span>${task.title}</span>
      <button class="delete-btn">Delete</button>
    </li>
  `).join('');
}

function addTask(title) {
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
}

function deleteTask(taskId) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
}

function toggleTaskCompletion(taskId) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
}

function init() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  renderTasks(tasks);

  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-btn');

  addTaskButton.addEventListener('click', () => {
    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
      addTask(taskTitle);
      taskInput.value = '';
    }
  });

  taskListElement.addEventListener('click', event => {
    const target = event.target;
    if (target.tagName === 'INPUT') {
      toggleTaskCompletion(parseInt(target.parentElement.dataset.id));
    } else if (target.classList.contains('delete-btn')) {
      deleteTask(parseInt(target.parentElement.dataset.id));
    }
  });
}

init();
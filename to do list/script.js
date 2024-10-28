const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});
window.onload = function() {
  const tasks = document.getElementById('tasks');

  tasks.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <div class="task-text" contenteditable="true"></div>
        <div class="task-buttons">
          <button class="edit">&#9998;</button>
          <button class="delete">&#10006;</button>
          <button class="done">&#10004;</button>
        </div>
      `;
      tasks.appendChild(newTask);
    }
  });

  tasks.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
      tasks.removeChild(e.target.parentElement.parentElement);
    }
  });
};

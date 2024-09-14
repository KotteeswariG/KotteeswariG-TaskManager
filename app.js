document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Add task
  taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the task text
    const taskText = taskInput.value;

    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.appendChild(document.createTextNode(taskText));

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);

    // Append to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  });

  // Delete task
  taskList.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-danger')) {
      if (confirm('Are you sure you want to delete this task?')) {
        e.target.parentElement.remove();
      }
    }
  });
});

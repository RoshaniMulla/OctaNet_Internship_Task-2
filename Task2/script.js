document.addEventListener("DOMContentLoaded", function() {
    const frontendTasks = document.getElementById("frontendTasks");
    const frontendForm = document.getElementById("frontendForm");
  
    frontendForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const taskName = document.getElementById("frontendTaskName").value.trim();
      const deadline = document.getElementById("frontendDeadline").value;
      const priority = document.getElementById("frontendPriority").value;
  
      if (taskName !== "") {
        addTask(frontendTasks, taskName, deadline, priority);
        frontendForm.reset();
      }
    });
  
    function addTask(category, task, deadline, priority) {
      const li = document.createElement("li");
      li.textContent = `${task} - Deadline: ${deadline} - Priority: ${priority}`;
      li.classList.add(`priority-${priority.toLowerCase()}`);
      category.appendChild(li);
    }
  });
  
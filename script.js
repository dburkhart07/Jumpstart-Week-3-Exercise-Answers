let selectedTaskId = null;

function selectTask(event) {
    // Need this to prevent the moveToCategoryBox being called
    event.stopPropagation();
    const task = event.currentTarget;

    // Deselect if same task is selected
    if (selectedTaskId === task.id) {
        task.style.backgroundColor = '';
        selectedTaskId = null;
    } else {
        // Unselect a previous task if need be
        if (selectedTaskId) {
            const prevTask = document.getElementById(selectedTaskId);
            if (prevTask) prevTask.style.backgroundColor = '';
        }

        // Set the new task and background
        selectedTaskId = task.id;
        task.style.backgroundColor = 'yellow';
    }
}

function moveToCategoryBox(event) {
    const newCategory = event.currentTarget;

    // Only move if there is a selected task
    if (selectedTaskId) {
        const taskToMove = document.getElementById(selectedTaskId);
        // Add the new task box to the category box
        newCategory.appendChild(taskToMove);

        taskToMove.style.backgroundColor = '';
        selectedTaskId = null;
    }
}

// Adding event listeners
const taskBoxes = document.querySelectorAll('.task-box');
taskBoxes.forEach(taskBox => {
    taskBox.addEventListener('click', selectTask);
});

const categoryBoxes = document.querySelectorAll('.task-category-box');
categoryBoxes.forEach(categoryBox => {
    categoryBox.addEventListener('click', moveToCategoryBox);
});

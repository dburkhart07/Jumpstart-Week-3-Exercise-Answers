let selectedTaskId = null;

function selectTask(event) {
    event.stopPropagation();
    const task = event.currentTarget;

    if (selectedTaskId === task.id) {
        task.style.backgroundColor = '';
        selectedTaskId = null;
    } else {
        if (selectedTaskId) {
            const prevTask = document.getElementById(selectedTaskId);
            if (prevTask) prevTask.style.backgroundColor = '';
        }

        selectedTaskId = task.id;
        task.style.backgroundColor = 'yellow';
    }
}

function moveToCategoryBox(event) {
    const newCategory = event.currentTarget;

    if (selectedTaskId) {
        const taskToMove = document.getElementById(selectedTaskId);
        newCategory.appendChild(taskToMove);

        taskToMove.style.backgroundColor = '';
        selectedTaskId = null;
    }
}

const taskBoxes = document.querySelectorAll('.task-box');
taskBoxes.forEach(taskBox => {
    taskBox.addEventListener('click', selectTask);
});

const categoryBoxes = document.querySelectorAll('.task-category-box');
categoryBoxes.forEach(categoryBox => {
    categoryBox.addEventListener('click', moveToCategoryBox);
});

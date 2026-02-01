const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

function addTask(){
    const taskValue = input.value.trim();
    if (taskValue === ''){
        alert('por favor insira uma tarefa');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskValue;

    const removeButton = document.createElement('button');
    removeButton.className = 'btn'
    removeButton.textContent = 'remover';
    removeButton.style.marginLeft = '10px';
        list.appendChild(li)

    removeButton.onclick = function(){
        list.removeChild(li);
    }

    li.appendChild(removeButton);

    input.value = '';

    input.focus();
}
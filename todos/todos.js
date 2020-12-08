document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submit-todo').disabled = true;
    document.querySelector('#new-todo').onkeyup = function () {
        var todoInput = document.querySelector('#new-todo');
        var submitTodo = document.querySelector('#submit-todo');
        if (todoInput.value.length === 0) {
            submitTodo.disabled = true;
        }
        else {
            submitTodo.disabled = false;
        }
    };
    document.querySelector('form').onsubmit = function () {
        var todos = document.querySelector('#todos');
        var todoInput = document.querySelector('#new-todo');
        var submitTodo = document.querySelector('#submit-todo');
        // Create new todo
        var todo = document.createElement('li');
        var todoTopic = document.createElement('span');
        todoTopic.innerHTML = todoInput.value;
        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '\u2713';
        deleteButton.onclick = function () {
            todos.removeChild(todo);
        };
        // Append elements to li
        todo.append(todoTopic);
        todo.append(deleteButton);
        // Append li to ul
        todos.append(todo);
        // Reset input
        todoInput.value = '';
        submitTodo.disabled = true;
        return false;
    };
});

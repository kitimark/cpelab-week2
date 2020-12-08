document.addEventListener('DOMContentLoaded', function() {
  document.querySelector<HTMLInputElement>('#submit-todo').disabled = true

  document.querySelector<HTMLInputElement>('#new-todo').onkeyup = () => {
    const todoInput = document.querySelector<HTMLInputElement>('#new-todo')
    const submitTodo = document.querySelector<HTMLInputElement>('#submit-todo')
    if (todoInput.value.length === 0) {
      submitTodo.disabled = true
    } else {
      submitTodo.disabled = false 
    }
  }

  document.querySelector('form').onsubmit = function () {
    const todos = document.querySelector<HTMLUListElement>('#todos')
    const todoInput = document.querySelector<HTMLInputElement>('#new-todo')
    const submitTodo = document.querySelector<HTMLInputElement>('#submit-todo')

    // Create new todo
    const todo = document.createElement('li')

    const todoTopic = document.createElement('span')
    todoTopic.innerHTML = todoInput.value

    // Create delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'x'
    deleteButton.onclick = function() {
      todos.removeChild(todo)
    }

    // Append elements to li
    todo.append(todoTopic)
    todo.append(deleteButton)

    // Append li to ul
    todos.append(todo)

    // reset input
    todoInput.value = ''
    submitTodo.disabled = true

    return false
  }
})

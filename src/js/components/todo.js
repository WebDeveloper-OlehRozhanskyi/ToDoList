import { tasks } from '../data/array-of-tasks'

export function initTodo() {
 const toDoList = document.querySelector('.todo-task__list')
 const form = document.querySelector('.todo-task__form')

 function createListItem(item) {
  const listItem = document.createElement('li')
  listItem.className = 'todo-task__item'
  listItem.textContent = item.name
  if (item.priority === 'low') {
   listItem.classList.add('todo-task__item--low')
  } else {
   listItem.classList.add('todo-task__item--high')
  }

  return listItem
 }

 function renderToDoList(items) {
  toDoList.innerHTML = ''
  const listItems = items.map(item => createListItem(item))

  toDoList.append(...listItems)
 }

 renderToDoList(tasks)

 form.addEventListener('submit', event => {
  event.preventDefault()

  const input = form.querySelector('.todo-task__input')
  const inputValue = input.value.trim()
  const inputRadio = form.querySelector('input[name="priority"]:checked')

  if (!inputValue) return

  const valueFormatt = inputValue[0].toUpperCase() + inputValue.slice(1)

  tasks.push({
   name: valueFormatt,
   done: false,
   priority: inputRadio.value,
  })

  renderToDoList(tasks)

  input.value = ''
 })
}

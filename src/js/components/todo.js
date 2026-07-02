import { tasks } from '../data/array-of-tasks.js'

export function initTodo() {
 const toDoList = document.querySelector('.todo-task__list')

 function createListItem(item) {
  const listItem = document.createElement('li')
  listItem.className = 'todo-task__list-item'
  listItem.textContent = item.name

  return listItem
 }

 function renderToDoList(items) {
  toDoList.innerHTML = ''
  const listItems = items.map(item => createListItem(item))
  console.log(listItems)
  toDoList.append(...listItems)
 }

 renderToDoList(tasks)
}

let nextTodoId = 0

export const addTodo = data => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: data.text,
    descript: data.descript
  }
}

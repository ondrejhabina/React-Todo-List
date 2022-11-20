import React from 'react'
import Todo from './Todo'

function TodoList({allTodos, closeTodo}) {
    let todoArr = [...allTodos]
    return(
      todoArr.map(todo => {
        return <Todo key={todo.key} id={todo.key} todoItem={todo.value} handleClose={closeTodo}/>
      })
    )
  }

export default TodoList
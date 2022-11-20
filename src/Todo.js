import React from 'react'
import styled from 'styled-components'

const TodoStyling = styled.div `
  border-radius: 0.5vmax;
  font-family:s'Open Sans', sans-serif;
  font-size: 26px;
  width: 80%;
  padding: 0.5vmax;
  margin: auto;
  margin-top: 2vmax;
  border: 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    button {
      align-self: center;
      border: 2px solid red;
      background-image: url('/src/cancel.png');
      width: 40px;
      height: 40px;
      border-radius: 0.5vmax;
      &:hover {
        background-color: red;
        border: 2px solid white;
      }
    }
`

function Todo({id, todoItem, handleClose}) {
    return(
      <TodoStyling id={id}>
        <p>{todoItem}</p>
        <button onClick={() => handleClose(id)}></button>
      </TodoStyling>
    ) 
  }

export default Todo
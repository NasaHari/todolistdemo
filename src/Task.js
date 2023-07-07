import React from 'react';
import './App.css';

export const Task = ({ index, todo, toggleTodo, deleteTodo }) => {
  return (
    <li id='task'>
      <p>{todo.text}</p>
      <div className='button-container'>
        <button className='taskbutton' onClick={() => toggleTodo(index)}>{todo.completed ? "Undo":"Complete"}</button>
        <button  className='taskbutton' onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default Task;
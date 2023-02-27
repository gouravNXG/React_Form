import React from 'react'
import { useEffect } from 'react';
import {v4 as uuidv4} from "uuid";
export default function Form({input, setInput, todos, setTodos, edit, setEdit}) {
    function updateTodo(title, id ){
    const newTodo = todos.map((todo)=> todo.id == id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEdit("");
    }
    useEffect(()=>{
        if(edit){
            setInput(edit.title);
        }else{
            setInput("")
        }
    },[setInput, edit]);
    function onInputChange(e){
        setInput(e.target.value);
    };
    function onFormSubmit(e){
        e.preventDefault();
        if(!edit){
            setTodos([...todos,{id: uuidv4(), title: input}]);
            setInput("");
        }else{
            updateTodo(input , edit.id)
        }
        
    }
  return (
      <form onSubmit={onFormSubmit}>
        <input type="text"
         placeholder='Enter todo'
          className='task-input'
          value={input}
          required
          onChange={onInputChange} >

        </input>
        <button className='button-add' type='submit' onClick={() => input()}>Add</button>
        </form>
  )
}
 
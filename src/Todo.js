import React, { useState } from 'react'
import Form from './todofd/Form';
import Todolist from './todofd/Todolist';
//import {useEffect } from 'react';
//import axios from 'axios';

export default function Todo() {
  const [input,setInput]=useState("");
  const[todos,setusers]=useState([]);
  const[edit,setEdit]=useState();

  return (
    <div className='container'>
    <div className='App'>
      <h1>Todo List </h1>
      <Form 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setusers}
      edit={edit}
      setEdit={setEdit}
      />
      <div>
        <Todolist
        todos={todos}
        setTodos={setusers}
        setEdit={setEdit} />
      </div>
      </div>
    </div>
  )
}

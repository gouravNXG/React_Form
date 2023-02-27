import React from 'react'
 function Todolist({todos, setTodos, setEdit}) {
    function handleDelete({id}){
        setTodos(todos.filter((todo)=> todo.id !== id));
    }
    function handleEdit({id}){
        const findTodo = todos.find((todo)=> todo.id == id);
        setEdit(findTodo);
    };
  return (
    <div>
        {todos.map((todo)=>(
            <li className='todo-list' key={todo.id}>

                <input type="text" value={todo.title} 
                className="list"
                 onChange={(e)=>e.preventDefault()}>    
                 </input>
          <div>
            <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>EDIT</button>
            <i className='edit' ></i> 
        
            <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>DELETE</button>
            <i className='delete' ></i> 
            </div>
            </li>  ))}
    </div>
  )
}
export default Todolist;

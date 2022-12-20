import { useState } from "react";
import Todo from "./todo";
import "../estilos/todoApp.css";


export default function TodoApp(){
  const [title,setTitle] = useState("");
  const [todos,setTodos] = useState([]);


  function handleInputText(e){
    const value = e.target.value; 
    setTitle(value);
  };

  function handleSubmit(e){
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos([...todos,newTodo]);
    setTitle("");
  };

  function handleUpdate(id,value){
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id){
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp);
  }

  return( 
  <div className="todoContainer">
    <form className="todoCreateForm" onSubmit={handleSubmit}>
      <input onChange={handleInputText} className="todoInput" type="text" value={title}/>
      <input onClick={handleSubmit} className="todoButton" type="submit" value="Crear Tarea"/>
    </form>
    <div className="todosContainer">
      {
        todos.map((item) =>(
         <Todo key={item.id} item = {item} onUpdate={handleUpdate} onDelete ={handleDelete}/>
        ))
      }
    </div>
  </div>
  );
}
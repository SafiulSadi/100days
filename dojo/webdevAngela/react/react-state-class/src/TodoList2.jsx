import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
export default function TodoList2(){
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}])
    let [newTodo, setNewTodo] =useState("")

    let addNewTodo = () =>{
        setTodos((prevTodo)=>{
            return ([...prevTodo, {task: newTodo, id:uuidv4()}])
        })
        setNewTodo("")
    }
    let newTodoTracker = (event) =>{
        setNewTodo(event.target.value);
    }    
    let deleteTodo = (id)=>{
        setTodos((prevTodos) =>prevTodos.filter((todo) => todo.id != id))
    }

    let upperCaseAll = ()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return {
                ...todo, task: todo.task.toUpperCase()
            }
        }))
    }

    return (<div>
        <input  onChange={newTodoTracker} placeholder="add a task to do" value={newTodo}/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={addNewTodo}>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <h4>Task Todo</h4>
        <ul>
            {todos.map((todo)=>{
                return <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() =>deleteTodo(todo.id)}>delete</button>
                </li>

            })}
        </ul>
        <button onClick={upperCaseAll}>UpperCase All</button>
    </div>)
}
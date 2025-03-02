import { useState } from "react"
export default function TodoList(){
    let [todos, setTodos] = useState(["sample task"])
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodo) =>{
            return [...prevTodo, newTodo]
        })
        setNewTodo("")
    }
    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    return (<div>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
        &nbsp;
        <button onClick={addNewTask}>Add task</button>

        <br /> <br /><br />
        <hr />
        <h2>Tasks Todo</h2>
        <ul>
            {todos.map((todo)=>(
               <li>{todo}</li>
            ))}
        </ul>
    </div>)
}
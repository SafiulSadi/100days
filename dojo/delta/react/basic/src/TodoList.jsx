import { useState } from "react"
export default function TodoList(){
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodo)=>{
            return ([...prevTodo, newTodo])
        })
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    return (
        <div>
            <input type="text" value={newTodo} onChange={updateTodoValue} placeholder="add a task" />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>Tasks to do</h4>
            <ul>
                {
                    todos.map((todo)=>
                    (<li>{todo}</li>)
                    )
                }
            </ul>
        </div>
    )
}
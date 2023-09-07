import React from "react";
import {useSelector, useDispatch } from "react-redux";
import {removeTodo} from '../store/todo/todoslice'

function ListTodo(){
const todos=useSelector((state=>state.todo.todos));
const dispatch=useDispatch();

    return(
            <>
            <div>
                List todo
            </div>
            {
            todos.map(todo => (
            <div key={todo.id}>{todo.text} ---   <button onClick={()=>dispatch(removeTodo(todo.id))} >Delete</button></div>
            ))
             }
            </>
    )
}
export default ListTodo
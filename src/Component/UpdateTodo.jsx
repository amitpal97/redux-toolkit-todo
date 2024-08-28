import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../slice/todo/todoSlice";


function UpdateTodo() {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const editTodo = () => {
        dispatch(updateTodo())
    }
    return (<>

        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
                if (todos.completed) return;

                if (isTodoEditable) {
                    editTodo();
                } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
        >
            {isTodoEditable ? "📁" : "✏️"}
        </button>
    </>)
}

export default UpdateTodo

import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initalState = {
    todos: [{
        id: nanoid(),
        todoMsg: "hii"
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initalState,
    reducer: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todoMsg: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },

        updateTodo: (state, action) => {
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
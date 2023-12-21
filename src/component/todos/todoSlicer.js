import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    name: "todo",
    initialState: [],
  
    reducers: {
      addTodo: (state, action) => {
        state.push({
          id: Date.now(),
          title: action.payload,
          isComplete: false,
        })
      },
      deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload)
      },
      isDone: (state, action) =>{
        const todo = state.find((todo) => todo.id === action.payload);
        if (todo) {
            todo.isComplete = !todo.isComplete
        }
      },
      editTodo: (state, action) => {
        const { id, newTitle } = action.payload;
        const todoToEdit = state.find((todo) => todo.id === id);
        if (todoToEdit) {
          todoToEdit.title = newTitle;
        }
      },
    }
  })
  
  
  export const {addTodo, deleteTodo, isDone, editTodo} = todos.actions;
  export default todos.reducer;
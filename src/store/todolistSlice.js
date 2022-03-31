import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    id: uuidv4(),
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Mengerjakan Assignment",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Membuat Resume",
    completed: false,
  },
];

export const todolistSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialValue,
  },
  reducers: {
    submitTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    handleDelete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    handleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});
export const { submitTodo, handleDelete, handleComplete } =
  todolistSlice.actions;
export default todolistSlice.reducer;

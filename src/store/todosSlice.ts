import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: string,
  title: string,
  isCompleted: boolean,
}

export interface ToDos {
  name: string;
  todos: Todo[];
}


const initialState: ToDos = {
  name: localStorage.getItem('name') || '',
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos(state, action) {
      const name = localStorage.getItem(action.payload);
      const todos = name ? JSON.parse(name) : [];
      state.todos = todos;
    },
    addTodo(state, action) {
      state.todos.push(action.payload)
      localStorage.setItem(state.name, JSON.stringify(state.todos))
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find((todo)=> todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.isCompleted = !toggledTodo.isCompleted
      }
    },
    resetTodos(state, action) {
      state.todos = [];
      localStorage.removeItem(action.payload)
    },
    loginUser(state, action) {
      state.name = action.payload;
      localStorage.setItem('name', action.payload);
    },
  }
})

export const {addTodo, removeTodo, toggleTodoCompleted,resetTodos, loginUser, getTodos} = todosSlice.actions;
export default todosSlice.reducer;
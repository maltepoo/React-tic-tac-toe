import {createStore} from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";
const UPDATE = "UPDATE";

const addTodo = (text) => {
  return {
    type: ADD,
    text
  }
}
const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id)
  }
}
const updateTodo = (text, id) => {
  return {
    type: UPDATE,
    text,
    id: parseInt(id)
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, {text: action.text, id: Date.now()}]
    case DELETE:
      return state.filter(todo => todo.id !== action.id)
    case UPDATE:
      const newState = state.map(todo => {
        if (todo.id === action.id) {
          const t = {text: action.text, id: todo.id}
          return t
        } else {
          return todo
        }
      })
      return newState
    default:
      return state
  }
}

const store = createStore(reducer);

// store.subscribe()

export const actionCreator = {
  addTodo,
  deleteTodo,
  updateTodo
}
export default store;
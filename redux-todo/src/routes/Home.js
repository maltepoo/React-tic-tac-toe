import React, { useState } from "react"
import { connect } from "react-redux"
import Todo from "../components/Todo"
import { actionCreator } from "../store"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { TextField } from "@mui/material";

function Home({todos, dispatchAddToDo}){
  const [text, setText] = useState("")
  function onChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatchAddToDo(text)
    setText("")
  }
  return (
    <div className="todoContainer">
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input type="text"placeholder="enter tasks" value={text} onChange={onChange} />
        <button><AddBoxIcon /></button>
      </form>
      <ul>{todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  // react-redux에서의 mapSateToProps 함수
  // 첫 인자는 store에서 온 state, 
  // 두번째 인자는 컴포넌트의 props
  // 이 함수에서 return 되는 값은 Home 컴포넌트의 props에 추가됨
  return {todos: state}
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAddToDo: (text) => dispatch(actionCreator.addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
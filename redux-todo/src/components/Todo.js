import React, { useState } from "react"
import { connect } from "react-redux"
import { actionCreator } from "../store"
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { TextField } from "@mui/material";

function Todo({text, onBtnClick, dispatchUpdateTodo, id}) {
  const [update, setUpdate] = useState("");
  const [visible, setVisible] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    dispatchUpdateTodo(update)
    setUpdate("")
    setVisible(!visible)
  }
  function onChange(e) {
    setUpdate(e.target.value)
  }
  function toggleVisible(){
    setVisible(!visible)
  }
  return (
  <li>
    <Link to={`/${id}`}>
      {text}
    </Link> &nbsp;
    <DeleteIcon onClick={onBtnClick}>Del</DeleteIcon>
    <AutoFixHighIcon onClick={toggleVisible}>Update</AutoFixHighIcon>
    {visible === true ? <form onSubmit={onSubmit}>
        <input type="text" value={update} onChange={onChange}/>
        <button>Confirm</button>
    </form>: null}
  </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
    dispatchUpdateTodo: (newText) => dispatch(actionCreator.updateTodo(newText, ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(Todo);
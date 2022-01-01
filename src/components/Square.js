import React from 'react';

function Square(props) {
  console.log(props)
  if (props.value != null && props.value === props.winner) {
    return (
      <button className="square winner" onClick={props.onClick}>
        {props.value}
      </button>
    );
  } else {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
}

export default Square;
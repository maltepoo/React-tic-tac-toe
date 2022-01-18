import React, { useState } from 'react';
import './App.css';
import Board from "./components/Board";

function App(props) {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  // class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       history: [{
  //         squares: Array(9).fill(null),
  //       }],
  //       stepNumber: 0,
  //       xIsNext: true,
  //     };
  //   }

  function handleClick(i) {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length -1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      newHistory.concat([{squares: squares}])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }
  //   handleClick(i) {
  //     const history = this.state.history.slice(0, this.state.stepNumber + 1);
  //     const current = history[history.length - 1];
  //     const squares = current.squares.slice();
  //     if (this.calculateWinner(squares) || squares[i]) {
  //       return;
  //     }
  //     squares[i] = this.state.xIsNext ? 'X' : 'O';
  //     this.setState({
  //       history: history.concat([{
  //         squares: squares,
  //       }]),
  //       stepNumber: history.length,
  //       xIsNext: !this.state.xIsNext,
  //     });
  //   }
      
  function jumpTp(step) {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }
  //   jumpTo(step) {
  //     this.setState({
  //       stepNumber: step,
  //       xIsNext: (step % 2) === 0,
  //     });
  //   }
  
  function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
  //   calculateWinner(squares) {
  //     const lines = [
  //       [0, 1, 2],
  //       [3, 4, 5],
  //       [6, 7, 8],
  //       [0, 3, 6],
  //       [1, 4, 7],
  //       [2, 5, 8],
  //       [0, 4, 8],
  //       [2, 4, 6],
  //     ];
  //     for (let i = 0; i < lines.length; i++) {
  //       const [a, b, c] = lines[i];
  //       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //         alert("게임이 끝났습니다 !")
  //         return squares[a];
  //       }
  //     }
  //     return null;
  //   }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);  
  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTp(move)}>{desc}</button>
      </li>
    );
  })
  //   render() {
  //     const history = this.state.history;
  //     const current = history[this.state.stepNumber];
  //     const winner = this.calculateWinner(current.squares);
      
  //     const moves = history.map((step, move) => {
  //       const desc = move ?
  //       'Go to move #' + move :
  //       'Go to game start';
  //       return (
  //         <li key={move}>
  //           <button onClick={() => this.jumpTo(move)}>{desc}</button>
  //         </li>
  //       );
  //     });

  let status;
  let playing = '-Playing Game-';
  if (winner) {
    status = 'Winner: ' + winner;
    playing = '-Game End-'
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <h2>{status}</h2>
       <Board
          squares={current.squares}
          winner={winner}
          onClick={(i) => handleClick(i)}
          />
        <hr />
        <button onClick={() => this.jumpTo(0)}>RESET</button>
      </div>
      <div className="game-info">
        <h3>Game status</h3>
        <ol>{moves}</ol>
        <h4>{playing}</h4>
      </div>
    </div>
  );
}

export default App;
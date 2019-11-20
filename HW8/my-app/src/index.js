import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button className="square"
      onClick={props.onClick}>
        {props.value}
      </button>
    );
  }


class Board extends React.Component {
  /*
  TimeTravel: Next, we’ll have the Board component receive squares and onClick props from the Game
  component. Since we now have a single click handler in Board for many Squares, we’ll
  need to pass the location of each Square into the onClick handler to indicate which
  Square was clicked. Here are the required steps to transform the Board component:
  */

  renderSquare(i) {
    return (
    <Square
    value ={this.props.squares[i]}
    onClick={() => this.props.onClick(i)}
    />
  );
  }
  /*
  OLD: We will call calculateWinner(squares) in the Board’s render function to check if a
   player has won. If a player has won, we can display text such as “Winner: X” or
    “Winner: O”. We’ll replace the status declaration in Board’s render function with this
     code:

     Time Travel: Since the Game component is now rendering the game’s status, we
     can remove the corresponding code from the Board’s render method. After
     refactoring, the Board’s render function looks like this:

  */
  renderSquares(n) {
    let squares = [];
    for (let i = n; i < n + 3; i++) {
      squares.push(this.renderSquare(i));
    }
    return squares;
  }

  renderRows(i) {
    return <div className="board-row">{this.renderSquares(i)}</div>;
  }
  render() {
      /*const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
      }
      */
    return (
      <div>
        {this.renderRows(0)}
        {this.renderRows(3)}
        {this.renderRows(6)}
      </div>
    );
  }
}


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  handleClick(i) {
    const locations = [
      [1, 1],
      [2, 1],
      [3, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3]

    ];
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    /*
    We can now change the Board’s handleClick function to return
    early by ignoring a click if someone has won the game or if
    a Square is already filled:
    */
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
    history: history.concat([
      {
      squares: squares,
      location: locations[i]
    }
  ]),
    stepNumber: history.length,
    xIsNext: !this.state.xIsNext,
  });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
  const history = this.state.history;
  const current = history[this.state.stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + '@' + history[move].location
        :'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {move === this.state.stepNumber ? <b> {desc}</b> : desc}
          </button>
        </li>
      );
    });


    let status;
  if (winner) {
    status = "Winner: " + winner.player + " @ " + winner.line;
  } else if (!current.squares.includes(null)) {
    status = "draw";
  } else {
    status = "Next player: " + (this.state.xIsNext ? "X" : "O");
  }

   return (
     <div className="game">
       <div className="game-board">
         <Board
           squares={current.squares}
           onClick={i => this.handleClick(i)}
         />
       </div>
       <div className="game-info">
         <div>{status}</div>
         <ol>{moves}</ol>
       </div>
     </div>
   );
 }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

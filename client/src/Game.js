

import React, {Component} from 'react'
import Board from './board';

export default class Game extends Component{

        constructor(props) {
          super(props);
          this.state = {
            stepNumber: 0,
            xIsNext: true,
            history: [
              {
                squares: Array(9).fill(null)}
            ]
        } 
          }
        
render(){
   
        const history = this.state.history;
        const current = history[this.state.stepNumber];
    return (
        <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}/>
            </div>
</div>        )
    }
}
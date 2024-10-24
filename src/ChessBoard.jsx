import './ChessBoard.css';
import Pawn from './Pieces';
import React, { useEffect, useState } from "react";
import BoardCell from './BoardCell';

function Chessboard() {

  var activePiece = [[]];
  const [chessBoard, setBoard] = useState([
    // ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
    // ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    // ['-', '-', '-', '-', '-', '-', '-', '-'],
    // ['-', '-', '-', '-', '-', '-', '-', '-'],
    // ['-', '-', '-', '-', '-', '-', '-', '-'],
    // ['-', '-', '-', '-', '-', '-', '-', '-'],
    // ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    // ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr']
    ['','','','','','','',''],
    [new Pawn([1,0]),
    new Pawn([1,1]),
    new Pawn([1,2]),
    new Pawn([1,3]),
    new Pawn([1,4]),
    new Pawn([1,5]),
    new Pawn([1,6]),
    new Pawn([1,7])],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    [new Pawn([6,0]),
    new Pawn([6,1]),
    new Pawn([6,2]),
    new Pawn([6,3]),
    new Pawn([6,4]),
    new Pawn([6,5]),
    new Pawn([6,6]),
    new Pawn([6,7])],
    ['','','','','','','','']
  ]);

  const changeBoard = (positionY, positionX) => {
    console.log(positionX, positionY);
    var newBoard = chessBoard.map(arr => arr.slice()); // Create a deep copy of the board
    console.log(newBoard);

    newBoard[positionY][positionX] = new Pawn(positionY, positionX);
    
    setBoard(newBoard);
  }

  return (
    <div className='chessboard'>
      {chessBoard.map((boardRow, rowIndex) => (
        <div className="boardrow" key={rowIndex}>
            {boardRow.map((cell, cellIndex) => (
              <BoardCell 
                  color={(cellIndex+rowIndex) % 2 === 0 ? 'white' : 'grey'}
                  lightUp={false}
                  piece={cell instanceof Pawn ? cell.getPieceImg() : ''}
                  positionX={cellIndex}
                  positionY={rowIndex}
                  handleMovePiece={changeBoard}
                  
                  />
                
            ))}
        </div>
      ))}
    </div>
  );
}

export default Chessboard;

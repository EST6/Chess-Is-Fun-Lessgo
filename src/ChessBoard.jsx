import './ChessBoard.css';
import Pawn from './Pieces';
import React, { useEffect, useState } from "react";
import BoardCell from './BoardCell';

function Chessboard() {

  var somePieceActive = false;
  const [activeSquares, setActiveSquares] = useState([[]]);


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
    [new Pawn([1,0], "black"),
    new Pawn([1,1], "black"),
    new Pawn([1,2], "black"),
    new Pawn([1,3], "black"),
    new Pawn([1,4], "black"),
    new Pawn([1,5], "black"),
    new Pawn([1,6], "black"),
    new Pawn([1,7], "black")],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    [new Pawn([6,0], "white"),
    new Pawn([6,1], "white"),
    new Pawn([6,2], "white"),
    new Pawn([6,3], "white"),
    new Pawn([6,4], "white"),
    new Pawn([6,5], "white"),
    new Pawn([6,6], "white"),
    new Pawn([6,7], "white")],
    ['','','','','','','','']
  ]);

  const changeBoard = (positionY, positionX) => {
    console.log(positionX, positionY);
    var newBoard = chessBoard.map(arr => arr.slice()); // Create a deep copy of the board
    console.log(newBoard);

    newBoard[positionY][positionX] = new Pawn(positionY, positionX);
    
    setBoard(newBoard);
  }

  const updateBoard = () => {
    setBoard(chessBoard.map(arr => arr.slice()));
  }

  const showAvailableMoves = (piece, positionY, positionX) =>{
    if(piece instanceof Pawn) {
      var positions = piece.getValidPosition(chessBoard);
      console.log("positions new: ", positions)
      setActiveSquares(positions);
    }else {
      console.log("not a piece?");
    }
    // if(activeSquares != []) {
    //   somePieceActive = true;
    // }

    // var newBoard = chessBoard.map(arr => arr.slice()); // Create a deep copy of the board
    // newBoard[positionY][positionX] = new Pawn(positionY, positionX);
    

  }

  return (
    <div className='chessboard'>
      {chessBoard.map((boardRow, rowIndex) => (
        <div className="boardrow" key={rowIndex}>
            {boardRow.map((cell, cellIndex) => (
              <BoardCell 
                  color={(cellIndex+rowIndex) % 2 === 0 ? 'white' : 'grey'}
                  lightUp={activeSquares.some(([r, c]) => r === rowIndex && c === cellIndex)}
                  piece={cell}
                  positionX={cellIndex}
                  positionY={rowIndex}
                  handleMovePiece={changeBoard}
                  handleClickPiece={showAvailableMoves}
                  
                  />
                
            ))}
        </div>
      ))}
    </div>
  );
}

export default Chessboard;

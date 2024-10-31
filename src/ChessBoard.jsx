import './ChessBoard.css';
import Pawn from './Pieces/Pawn';
import Knight from './Pieces/Knight';
import Rook from './Pieces/Rook';
import Bishop from './Pieces/Bishop';
import King from './Pieces/King';
import Queen from './Pieces/Queen';
import Piece from './Pieces/Piece';
import React, { useEffect, useState } from "react";
import BoardCell from './BoardCell';

function Chessboard() {

  var somePieceActive = false;
  const [activePieceIndexes, setActivePieceIndexes] = useState([]);
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
    [new Rook([0,0], "black"),new Knight([0,1], "black"),new Bishop([0,2], "black"),new Queen([0,3], "black"),new King([0,4], "black"),new Bishop([0,5], "black"),new Knight([0,6], "black"),new Rook([0,7], "black")],
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
    [new Rook([7,0], "white"),new Knight([7,1], "white"),new Bishop([7,2], "white"),new Queen([7,3], "white"),new King([7,4], "white"),new Bishop([7,5], "white"),new Knight([7,6], "white"),new Rook([7,7], "white")]

  ]);


  const arraysEqual = (a, b) => a.length === b.length && a.every((value, index) => value === b[index]);



  const movePiece = (startPos, endPos) => {
    var newBoard = chessBoard.map(arr => arr.slice()); // Create a deep copy of the board

    newBoard[endPos[0]][endPos[1]] = newBoard[startPos[0]][startPos[1]];
    newBoard[startPos[0]][startPos[1]] = '';
    newBoard[endPos[0]][endPos[1]].move(endPos);
    
    setBoard(newBoard);
  }

  const updateBoard = () => {
    setBoard(chessBoard.map(arr => arr.slice()));
  }

  const resetActiveSquares = () => {
    setActivePieceIndexes([]);
    setActiveSquares([]);    
  }

  const handleMovementLogic = (piece, positionY, positionX) => {
    if(!arraysEqual(activeSquares, [])) {
      if(activeSquares.some(([r, c]) => r === positionY && c === positionX)) {
        movePiece(activePieceIndexes, [positionY, positionX]);
        resetActiveSquares();
      }
    }

    showAvailableMoves(piece, positionY, positionX);
  }

  const showAvailableMoves = (piece, positionY, positionX) =>{

    var clickPosition = [positionY, positionX];
    if(arraysEqual(clickPosition, activePieceIndexes)) {
      setActivePieceIndexes([]);
      setActiveSquares([[]]);
      return;
    }

    if(piece instanceof Piece) {
      var positions = piece.getValidPosition(chessBoard);
      console.log("positions new: ", positions);
      setActiveSquares(positions);
    }else {
      console.log("not a piece?");
    }
    setActivePieceIndexes([positionY, positionX]);
    
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
                  // handleMovePiece={activeSquares.some(([r, c]) => r === rowIndex && c === cellIndex) ? changeBoard : ''}
                  handleClickPiece={handleMovementLogic}
                  
                  />
                
            ))}
        </div>
      ))}
    </div>
  );
}

export default Chessboard;

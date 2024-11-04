import './BoardCell.css';
import Piece from './Pieces/Piece';

function BoardCell ({color, lightUp, piece="", positionX, positionY, /*handleMovePiece,*/ handleClickPiece}) {
    var bgColor = lightUp ? 'red' : color;
    var pieceColor = "";
    piece instanceof Piece ? pieceColor = piece.getColor() : pieceColor = "";
  return (
    <div className='boardCell'onClick={() => handleClickPiece(piece, positionY, positionX, pieceColor)} style={{ backgroundColor: bgColor}} >
        {piece instanceof Piece ? <img src={`/${piece.getPieceImg()}`} alt="" className='piece' /> : <p></p>}
    </div>
  );
}

// old onclick: {()=>handleMovePiece(positionY, positionX)}
export default BoardCell;

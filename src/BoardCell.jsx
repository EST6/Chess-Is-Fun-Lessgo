import './BoardCell.css';
import Piece from './Pieces/Piece';

function BoardCell ({color, lightUp, piece="", positionX, positionY, handleMovePiece, handleClickPiece}) {
    var bgColor = lightUp ? 'red' : color;
  return (
    <div className='boardCell'onClick={() => handleClickPiece(piece, positionY, positionX)} style={{ backgroundColor: bgColor}} >
        {piece instanceof Piece ? <img src={`/${piece.getPieceImg()}`} alt="" className='piece' /> : <p></p>}
    </div>
  );
}

// old onclick: {()=>handleMovePiece(positionY, positionX)}
export default BoardCell;

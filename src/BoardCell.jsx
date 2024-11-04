import './BoardCell.css';
import Piece from './Pieces/Piece';

function BoardCell ({color, lightUp, piece="", positionX, positionY, handleClickPiece}) {
    var classStyling = lightUp ? 'circleHighlight' : '';
    var pieceColor = "";
    piece instanceof Piece ? pieceColor = piece.getColor() : pieceColor = "";
  return (
    <div className={`boardCell`} onClick={() => handleClickPiece(piece, positionY, positionX, pieceColor)} style={{ backgroundColor: color}} >
        {piece instanceof Piece ? <img src={`/${piece.getPieceImg()}`} alt="" className='piece' /> : <p></p>}
        {lightUp && <>
                <div className='circleHighlight'></div>
            </>}
    </div>
  );
}

export default BoardCell;

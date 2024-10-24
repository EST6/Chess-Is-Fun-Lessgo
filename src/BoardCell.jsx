import './BoardCell.css';

function BoardCell ({color, lightUp, piece="", positionX, positionY, handleMovePiece}) {
    var bgColor = lightUp ? 'red' : color;
  return (
    <div className='boardCell'onClick={()=>handleMovePiece(positionY, positionX)} style={{ backgroundColor: bgColor}} >
        {piece ? <img src={`/${piece}`} alt="" className='piece' /> : <p></p>}
    </div>

  );
}

export default BoardCell;

import './BoardCell.css';

function BoardCell ({color, lightUp, piece=""}) {
    var bgColor = lightUp ? 'red' : color;
  return (
    <div className='boardCell'style={{ backgroundColor: bgColor}}>
        {piece ? <img src={`/${piece}`} alt="" /> : <p>no piece!</p>}
    </div>
  );
}

export default BoardCell;

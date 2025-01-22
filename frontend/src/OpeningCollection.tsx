import './OpeningCollection.css';
import Chessboard from './ChessBoard.tsx';


function OpeningCollection() {
  var chessOpenings = [
    {openingName: "Fried Liver", shortDesc:"Agressive opening, good for beginner and intermediate players"},
    {openingName: "Evan's Gambit", shortDesc:"Gambit for good early development, good for beginner and intermediate players"}
  ]
  return (
    <div className='openingCollection'>
      {chessOpenings.map((opening, openingIndex) => (
          <div className="openingItem" key={openingIndex}>
            <h2>
              {opening.openingName}
            </h2>
            <Chessboard></Chessboard>
            <div className="description">
              <p>{opening.shortDesc}</p>
            </div>
          </div>
      ))}
    </div>
  );
}

export default OpeningCollection;

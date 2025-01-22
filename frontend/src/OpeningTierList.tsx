import './OpeningTierList.css';
import Chessboard from './ChessBoard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OpeningTierList() {
  var chessOpenings = [
    {openingName: "Fried Liver", shortDesc:"Agressive opening, good for beginner and intermediate players"},
    {openingName: "Evan's Gambit", shortDesc:"Gambit for good early development, good for beginner and intermediate players"}
  ]
  const [stats, setStats] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://explorer.lichess.ovh/lichess?variant=standard&speeds=blitz,rapid,classical&ratings=2200,2500&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR%20w%20KQkq%20-%200%201"
      )
      .then((response) => {
        const moves = response.data.moves || [];

        // Calculate percentages and format the data
        const calculatedStats = moves.map((move) => {
          const totalGames = move.white + move.black + move.draws;
          return {
            move: move.san, // The SAN notation
            openingName: move.opening?.name || "Unknown Opening",
            whitePercent: ((move.white / totalGames) * 100).toFixed(2),
            blackPercent: ((move.black / totalGames) * 100).toFixed(2),
            drawPercent: ((move.draws / totalGames) * 100).toFixed(2),
            totalGames,
          };
        });

        setStats(calculatedStats);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Chess Opening Statistics</h1>
      {stats.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Move</th>
              <th>Opening Name</th>
              <th>White Win %</th>
              <th>Draw %</th>
              <th>Black Win %</th>
              <th>Total Games</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.move}</td>
                <td>{stat.openingName}</td>
                <td>{stat.whitePercent}%</td>
                <td>{stat.drawPercent}%</td>
                <td>{stat.blackPercent}%</td>
                <td>{stat.totalGames.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

  // return (
  //   <div className='openingTierList'>
  //     {/* {chessOpenings.map((opening, openingIndex) => (
  //         <div className="openingItem" key={openingIndex}>
  //           <h2>
  //             {opening.openingName}
  //           </h2>
  //           <Chessboard></Chessboard>
  //           <div className="description">
  //             <p>{opening.shortDesc}</p>
  //           </div>
  //         </div>
  //     ))} */}
  //   </div>
  // );
}

export default OpeningTierList;
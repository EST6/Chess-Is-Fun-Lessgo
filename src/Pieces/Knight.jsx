import Piece from "./Piece";

class Knight extends Piece {

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {
        var validMoves = [[]];

        const pos = this.position;
        
        if (pos[0]+ 2 < 8  && pos[1] + 1 < 8 && [0,1].includes(super.checkPiece(boardState, [pos[0]+ 2, pos[1] + 1], this.color)))  validMoves.push([pos[0]+ 2, pos[1] + 1] )
        if (pos[0]+ 2 < 8  && pos[1] - 1 >= 0 && [0,1].includes(super.checkPiece(boardState, [pos[0]+ 2, pos[1] - 1], this.color))) validMoves.push([pos[0]+ 2, pos[1] - 1] )
        if (pos[0]- 2 >= 0 && pos[1] + 1 < 8  && [0,1].includes(super.checkPiece(boardState, [pos[0]- 2, pos[1] + 1], this.color))) validMoves.push([pos[0]- 2, pos[1] + 1])
        if (pos[0]- 2 >= 0 && pos[1] - 1 >= 0 && [0,1].includes(super.checkPiece(boardState, [pos[0]- 2, pos[1] - 1], this.color))) validMoves.push([pos[0]- 2, pos[1] - 1] )
        if (pos[0]- 1 >= 0 && pos[1] + 2 < 8  && [0,1].includes(super.checkPiece(boardState, [pos[0]- 1, pos[1] + 2], this.color))) validMoves.push([pos[0]- 1, pos[1] + 2])
        if (pos[0]+ 1 < 8  && pos[1] + 2 < 8  && [0,1].includes(super.checkPiece(boardState, [pos[0]+ 1, pos[1] + 2], this.color))) validMoves.push([pos[0]+ 1, pos[1] + 2])
        if (pos[0]+ 1 < 8  && pos[1] - 2 >= 0 && [0,1].includes(super.checkPiece(boardState, [pos[0]+ 1, pos[1] - 2], this.color))) validMoves.push([pos[0]+ 1, pos[1] - 2] )
        if (pos[0]- 1 >= 0 && pos[1] - 2 >= 0 && [0,1].includes(super.checkPiece(boardState, [pos[0]- 1, pos[1] - 2], this.color))) validMoves.push([pos[0]- 1, pos[1] - 2] )
        
        return validMoves;
    }

    getPieceImg() {
        return (this.color === "white" ? "wKnight.png" : "bKnight.png");
    }
}


export default Knight;
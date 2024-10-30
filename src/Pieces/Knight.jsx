import Piece from "./Piece";

class Knight extends Piece {
    constructor(position, color) {
        super(position, color)
        this.hasMoved = false;
    }

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {
        var validMoves = [[]];

        
        if (this.position[0]+ 2 < 8  && this.position[1] + 1 < 8 && [0,1].includes(super.checkPiece(boardState, [this.position[0]+ 2, this.position[1] + 1], this.color)))  validMoves.push([this.position[0]+ 2, this.position[1] + 1] );
        if (this.position[0]+ 2 < 8  && this.position[1] - 1 >= 0 && [0,1].includes(super.checkPiece(boardState, [this.position[0]+ 2, this.position[1] - 1], this.color))) validMoves.push([this.position[0]+ 2, this.position[1] - 1] );
        if (this.position[0]+ 2 < 8  && this.position[1] - 1 >= 0 && [0,1].includes(super.checkPiece(boardState, [this.position[0]+ 2, this.position[1] - 1], this.color))) validMoves.push([this.position[0]+ 2, this.position[1] - 1] );
        if (this.position[0]- 2 >= 0 && this.position[1] + 1 < 8  && [0,1].includes(super.checkPiece(boardState, [this.position[0]- 2, this.position[1] + 1], this.color))) validMoves.push([this.position[0]- 2, this.position[1] + 1]);
        if (this.position[0]- 2 >= 0 && this.position[1] - 1 >= 0 && [0,1].includes(super.checkPiece(boardState, [this.position[0]- 2, this.position[1] - 1], this.color))) validMoves.push([this.position[0]- 2, this.position[1] - 1] );
        if (this.position[0]- 1 >= 0 && this.position[1] + 2 < 8  && [0,1].includes(super.checkPiece(boardState, [this.position[0]- 1, this.position[1] + 2], this.color))) validMoves.push([this.position[0]- 1, this.position[1] + 2]);
        if (this.position[0]+ 1 < 8  && this.position[1] + 2 < 8  && [0,1].includes(super.checkPiece(boardState, [this.position[0]+ 1, this.position[1] + 2], this.color))) validMoves.push([this.position[0]+ 1, this.position[1] + 2]);
        if (this.position[0]+ 1 < 8  && this.position[1] - 2 >= 0 && [0,1].includes(super.checkPiece(boardState, [this.position[0]+ 1, this.position[1] - 2], this.color))) validMoves.push([this.position[0]+ 1, this.position[1] - 2] );
        if (this.position[0]- 1 >= 0 && this.position[1] - 2 >= 0 && [0,1].includes(super.checkPiece(boardState, [this.position[0]- 1, this.position[1] - 2], this.color))) validMoves.push([this.position[0]- 1, this.position[1] - 2] );
        
        return validMoves;
    }

    // TODO remove this, call Move() from parent
    updatePosition(newPosition){
        if(newPosition[0] !== this.position[0]){
            this.position[0] = newPosition[0];
            this.hasMoved = true;
        }
    }

    getPieceImg() {
        return (this.color == "white" ? "wKnight.png" : "bKnight.png");
    }
}


export default Knight;
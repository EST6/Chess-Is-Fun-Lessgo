import Piece from "./Piece";

class Pawn extends Piece {
    constructor(position, color) {
        super(position, color)
        this.hasMoved = false;
    }


    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {
        var times = 1;
        if(this.color === "white") {
            times = -1;
        }
        console.log(this.position);

        if(!this.hasMoved) return [[this.position[0] + (2 * times), this.position[1]],[this.position[0]+(1*times), this.position[1]]];

        return [[this.position[0] + (1*times), this.position[1]]];
    }

    getPieceImg() {
        return (this.color === "white" ? "wPawn.png" : "bPawn.png");
    }

    // Queen a pawn?
    // en passant?
    // take a piece, move diag
}

export default Pawn;
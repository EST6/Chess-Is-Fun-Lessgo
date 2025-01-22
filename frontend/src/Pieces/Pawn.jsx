import Piece from "./Piece";

class Pawn extends Piece {

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {
        var a = [[]];

        var times = 1;
        if(this.color === "white") {
            times = -1;
        }

        var takeMove = [this.position[0]+(1*times), this.position[1]+(1*times)]
        if(1===super.checkPiece(boardState, takeMove, this.color)) {
            a.push(takeMove);
        }
        
        takeMove = [this.position[0]+(1*times), this.position[1]+(-1*times)]
        if(1===super.checkPiece(boardState, takeMove, this.color)) {
            a.push(takeMove);
        }

        takeMove = [this.position[0] + (1*times), this.position[1]]

        if(0===super.checkPiece(boardState, takeMove, this.color)) {
            a.push(takeMove);
        }
        
        if((this.position[0] === 6 && this.color === "white") || (this.position[0] === 1 && this.color === "black")) {
            takeMove =[this.position[0] + (2 * times), this.position[1]]

            if(0===super.checkPiece(boardState, takeMove, this.color)) {
                a.push(takeMove);
            }
        } 

        return a;
    }

    getPieceImg() {
        return (this.color === "white" ? "wp.svg" : "bp.svg");
    }

    // Queen a pawn?
    // en passant?
}

export default Pawn;
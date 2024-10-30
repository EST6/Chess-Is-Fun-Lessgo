import Piece from "./Piece";

class Queen extends Piece {
    constructor(position, color) {
        super(position, color)
    }

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {

        var validMoves = [[]];

        return validMoves;
    }


    // TODO remove this, call Move() from parent
    updatePosition(newPosition){
        if(newPosition[0] !== this.position[0]){
            this.position[0] = newPosition[0];
        }
    }

    getPieceImg() {
        return (this.color == "white" ? "wQueen.png" : "bQueen.png");
    }
}


export default Queen;
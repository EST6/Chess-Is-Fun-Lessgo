import Piece from "./Piece";

class Queen extends Piece {

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {

        var validMoves = [[]];

        return validMoves;
    }

    getPieceImg() {
        return (this.color === "white" ? "wQueen.png" : "bQueen.png");
    }
}


export default Queen;
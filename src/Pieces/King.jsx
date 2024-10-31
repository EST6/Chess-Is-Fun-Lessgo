import Piece from "./Piece";

class King extends Piece {

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {

        var validMoves = [[]];

        return validMoves;
    }

    getPieceImg() {
        return (this.color === "white" ? "wKing.png" : "bKing.png");
    }
}


export default King;
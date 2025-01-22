import Piece from "./Piece";

class King extends Piece {

   getValidPosition(boardState) {

        var validMoves = [[]];
        var moveList = [
            [1, 1],
            [1, 0],
            [1, -1],
            [0, 1],
            [0, -1],
            [-1, 1],
            [-1, 0],
            [-1, -1]
        ]

        moveList.forEach((move)=> {
            if([0,1].includes(super.checkPiece(boardState, [this.position[0]+move[0], this.position[1]+move[1]], this.color)))
                validMoves.push([this.position[0]+move[0], this.position[1]+move[1]]);
        })

        return validMoves;
    }

    checkValidKingMove(boardState, color, x, y){
        var validPos = [this.position[0]+x, this.position[1]+y]
        if([0,1].includes(super.checkPiece(boardState, validPos, this.color))) {
            return(validPos);
        } 
        return validPos;
    }

    getPieceImg() {
        return (this.color === "white" ? "wk.svg" : "bk.svg");
    }
}


export default King;
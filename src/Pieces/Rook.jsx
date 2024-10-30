import Piece from "./Piece";

class Rook extends Piece {
    constructor(position, color) {
        super(position, color)
    }

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {
        var validMoves = this.getValidRookMoves(this.position, boardState);

        return validMoves;
    }

    getValidRookMoves(position, boardState, y=1) {
        var a = [[]]
        var left, right, up, down = true;
        while(y < 8) {
            if(left && position[0] - y < 8) {
                switch(super.checkPiece(boardState, [position[0] - y, position[1]], this.color)) {
                    case 0 : a.push([position[0] - y, position[1]]); break;
                    case 1 : a.push([position[0] - y, position[1]]); left = false; break;
                    case 2 : left = false; break;
                    default : break;
                }
            }
            if(right && position[0] + y < 8) {
                switch(super.checkPiece(boardState, [position[0] + y, position[1]], this.color)) {
                    case 0 : a.push([position[0] + y, position[1]]); break;
                    case 1 : a.push([position[0] + y, position[1]]); right = false; break;
                    case 2 : right = false; break;
                    default : break;
                }
            }
            if(up && position[1] + y < 8) {
                switch(super.checkPiece(boardState, [position[0], position[1] + y], this.color)) {
                    case 0 : a.push([position[0], position[1] + y]); break;
                    case 1 : a.push([position[0], position[1] + y]); up = false; break;
                    case 2 : up = false; break;
                    default : break;
                }
            }
            if(down && position[1] + y < 8) {
                switch(super.checkPiece(boardState, [position[0], position[1] - y], this.color)) {
                    case 0 : a.push([position[0], position[1] - y]); break;
                    case 1 : a.push([position[0], position[1] - y]); down = false; break;
                    case 2 : down = false; break;
                    default : break;
                }
            }
            y++;
        }
    
        return a;
    }


    // TODO remove this, call Move() from parent
    updatePosition(newPosition){
        if(newPosition[0] !== this.position[0]){
            this.position[0] = newPosition[0];
        }
    }

    

    

    getPieceImg() {
        return (this.color == "white" ? "wRook.png" : "bRook.png");
    }
}


export default Rook;
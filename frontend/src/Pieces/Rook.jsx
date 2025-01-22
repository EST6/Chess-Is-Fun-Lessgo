import Piece from "./Piece";

class Rook extends Piece {

    getValidPosition(boardState) {
        var validMoves = this.getValidRookMoves(this.position, boardState);

        return validMoves;
    }

    getValidRookMoves(position, boardState) {
        var a = [[]];
        var left = true, right = true, up = true, down = true; 
        var y = 1;
        
        while (y < 8) {
            if (left && position[1] - y >= 0) {
                var pos = [position[0], position[1] - y];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;              
                    case 1: a.push(pos); left = false; break;   
                    case 2: left = false; break;                
                    default : break;
                }
            }
        
            if (right && position[1] + y < 8) {
                var pos = [position[0], position[1] + y];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;
                    case 1: a.push(pos); right = false; break;
                    case 2: right = false; break;
                    default : break;
                }
            }
        
            if (up && position[0] + y < 8) {
                var pos = [position[0] + y, position[1]];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;
                    case 1: a.push(pos); up = false; break;
                    case 2: up = false; break;
                    default : break;
                }
            }
        
            if (down && position[0] - y >= 0) {
                var pos = [position[0] - y, position[1]];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;
                    case 1: a.push(pos); down = false; break;
                    case 2: down = false; break;
                    default : break;
                }
            }
        
            y++;
        }
    
        return a;
    }

    getPieceImg() {
        return (this.color === "white" ? "wr.svg" : "br.svg");
    }
}


export default Rook;
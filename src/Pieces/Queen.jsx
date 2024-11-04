import Piece from "./Piece";

class Queen extends Piece {

    getValidPosition(boardState) {

        var validMoves = this.getValidQueenMoves(this.position, boardState);

        return validMoves;
    }

    getValidQueenMoves(position, boardState){
        // re using logic from rook + bishop
        var a = [[]];
        var pp = true, pn = true, np = true, nn = true; 
        var left = true, right = true, up = true, down = true; 
        var y = 1;
        
        while (y < 8) {
            if (pp && position[0] + y < 8 && position[1] + y < 8) {
                var pos = [position[0] + y, position[1] + y];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;              
                    case 1: a.push(pos); pp = false; break;   
                    case 2: pp = false; break;                
                    default : break;
                }
            }
        
            if (pn && position[0] + y < 8 && position[1] - y >= 0) {
                var pos = [position[0] + y, position[1] - y];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;
                    case 1: a.push(pos); pn = false; break;
                    case 2: pn = false; break;
                    default : break;
                }
            }
        
            if (np && position[0] - y >= 0 && position[1] + y < 8) {
                var pos = [position[0] - y, position[1] + y];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;
                    case 1: a.push(pos); np = false; break;
                    case 2: np = false; break;
                    default : break;
                }
            }
        
            if (nn && position[0] - y >= 0 && position[1] - y >= 0) {
                var pos = [position[0] - y, position[1] - y];
                switch (super.checkPiece(boardState, pos, this.color)) {
                    case 0: a.push(pos); break;
                    case 1: a.push(pos); nn = false; break;
                    case 2: nn = false; break;
                    default : break;
                }
            }

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
        return (this.color === "white" ? "wq.svg" : "bq.svg");
    }
}


export default Queen;
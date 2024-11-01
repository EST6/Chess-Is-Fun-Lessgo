import Piece from "./Piece";

class Bishop extends Piece {

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {

        var validMoves = this.getValidBishopMoves(this.position, boardState);

        return validMoves;
    }

    getValidBishopMoves(position, boardState) {
        // while(y > -8) {
        //     if((position[0] + y < 8 || position[0] + y >= 0) && 
        //     (position[1] + x < 8 || position[1] + x >= 0)) a.push([position[0] + y, position[1] + x]);
            
        //     if((position[0] + y < 8 || position[0] + y >= 0) && 
        //     (position[1] - x < 8 || position[1] - x >= 0)) a.push([position[0] + y, position[1] - x]);
            
        //     y--;
        //     x--;
        // }
    
    
    
        //TODO FIX THIS, its now rook logic.
        var a = [[]];
        var pp = true, pn = true, np = true, nn = true; 
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
        
            y++;
        }
    
        return a;
    }

    getPieceImg() {
        return (this.color === "white" ? "wBishop.png" : "bBishop.png");
    }
}



export default Bishop;
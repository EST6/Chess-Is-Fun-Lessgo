import Piece from "./Piece";

class Bishop extends Piece {

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {

        var validMoves = getValidBishopMoves(this.position, boardState);

        return validMoves;
    }

    getPieceImg() {
        return (this.color === "white" ? "wBishop.png" : "bBishop.png");
    }
}

function getValidBishopMoves(position, boardState, y=8, x=8) {
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

export default Bishop;
import Piece from "./Piece";

class Bishop extends Piece {
    constructor(position, color) {
        super(position, color)
        this.hasMoved = false;
    }

    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {

        var validMoves = getValidBishopMoves(this.position, boardState);

        return validMoves;
    }

    // TODO remove this, call Move() from parent
    updatePosition(newPosition){
        if(newPosition[0] !== this.position[0]){
            this.position[0] = newPosition[0];
            this.hasMoved = true;
        }
    }

    getPieceImg() {
        return (this.color == "white" ? "wBishop.png" : "bBishop.png");
    }
}

function getValidBishopMoves(position, boardState, y=8, x=8) {
    var a = [[]]

    while(y > -8) {
        if((position[0] + y < 8 || position[0] + y >= 0) && 
        (position[1] + x < 8 || position[1] + x >= 0)) a.push([position[0] + y, position[1] + x]);
        
        if((position[0] + y < 8 || position[0] + y >= 0) && 
        (position[1] - x < 8 || position[1] - x >= 0)) a.push([position[0] + y, position[1] - x]);
        
        y--;
        x--;
    }

    return a;
}

export default Bishop;
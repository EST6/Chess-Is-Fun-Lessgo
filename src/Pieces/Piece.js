class Piece { 
    constructor(position, color) {
        this.position = position;
        this.hasMoved = false;
        this.color = color;
    }

    move(newPosition){
        if(newPosition!== this.position){
            this.position = newPosition;
        }
    }

    getColor() {
        return this.color;
    }

    /*
        0 : can move open square
        1 : can move and take piece
        2 : can not move, your own piece in the way or out of board
    */
    checkPiece(boardState, position, myColor){
        if(position[0] >= 8 || position[0] < 0 || position[1] >= 8 || position[1] < 0) return 2;
        
        var piece = boardState[position[0]][position[1]]
        if(!(piece instanceof Piece)) return 0;
        
        if(piece.getColor() !== myColor) return 1
    
        return 2;        
    }
}

export default Piece
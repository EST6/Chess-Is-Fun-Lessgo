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
        2 : can not move, your own piece in the way
    */
    checkPiece(boardState, position, myColor){
        var piece = boardState[position[0]][position[1]]
        if(!(piece instanceof Piece)) return 0;
        
        if(piece.getColor() !== myColor) return 1
    
        return 2;        
    }
}

export default Piece
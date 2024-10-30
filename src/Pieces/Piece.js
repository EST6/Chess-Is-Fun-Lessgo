class Piece { 
    constructor(position, color) {
        this.position = position;
        this.hasMoved = false;
        this.color = color;
    }

    move(newPosition){
        if(newPosition[0] !== this.position[0]){
            this.position[0] = newPosition[0];
            this.hasMoved = true;
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
        if(boardState[position[0]][position[1]] instanceof Piece){
            if(boardState[position[0]][position[1]].getColor !== myColor){
                return 1
            }else{
                return 2;
            }
        }
        return 0;
    }
}

export default Piece
class Pawn {
    constructor(position) {
        this.position = position;
        this.hasMoved = false;
    }

    getValidPosition(boardState) {
        if(!this.hasMoved) return [this.position[0] + 2, this.position[0] + 1];

        return [this.position[0] + 1];
    }

    updatePosition(newPosition){
        if(newPosition[0] !== this.position[0]){
            this.position[0] = newPosition[0];
            this.hasMoved = true;
        }
    }

    getPieceImg() {
        return "wPawn.png";
    }

    // Queen a pawn?
    // en passant?
    // take a piece, move diag
}
/*
class Knight {
    constructor(position) {
        this.position = position;
    }

    getValidPosition(boardState) {
        return [this.position];
    }

    updatePosition(newPosition){
        if(newPosition != this.position){
            this.position = newPosition;
            this.hasMoved = true;
        }
    }

    getPieceImg() {
        return "pawn";
    }

    // Queen a pawn?
    // en passant?
    // take a piece, move diag
}*/

export default Pawn;
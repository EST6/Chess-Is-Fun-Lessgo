class Pawn {
    constructor(position, color) {
        this.position = position;
        this.hasMoved = false;
        this.color = color;
    }


    // TODO make boardState actually check board state :P
    getValidPosition(boardState) {
        var times = 1;
        if(this.color == "white") {
            times = -1;
        }
        console.log(this.position);

        if(!this.hasMoved) return [[this.position[0] + (2 * times), this.position[1]],[this.position[0]+(1*times), this.position[1]]];

        return [[this.position[0] + (1*times), this.position[1]]];
    }

    updatePosition(newPosition){
        if(newPosition[0] !== this.position[0]){
            this.position[0] = newPosition[0];
            this.hasMoved = true;
        }
    }

    getPieceImg() {
        return (this.color == "white" ? "wPawn.png" : "bPawn.png");
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
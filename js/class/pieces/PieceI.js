import Piece from './Piece.js';

class PieceI extends Piece {
  constructor(coordinates){
    this.location = [coordinates, coordinates+1, coordinates+2, coordinates+3]
  }

  rotate(){

  }

  move(){
    
  }
}

export default PieceI;
import Piece from './Piece.js';

class PieceT extends Piece {
  constructor(coordinates){
    this.location = [coordinates - 10, (coordinates - 10) - 1, (coordinates -10) + 1, coordinates]
  }

  rotate(){

  }

  move(){

  }

}

export default PieceT;
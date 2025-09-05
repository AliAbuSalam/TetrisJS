import Piece from './Piece.js';

class PieceT extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'T Piece';
    this.location = [coordinates - 10, (coordinates - 10) - 1, (coordinates -10) + 1, coordinates]
  }

  rotate(){

  }

  move(){

  }

}

export default PieceT;
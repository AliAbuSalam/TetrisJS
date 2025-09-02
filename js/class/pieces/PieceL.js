import Piece from './Piece.js';

class PieceL extends Piece {
  constructor(coordinates){
    super();
    this.name = 'L Piece';
    this.location = [coordinates, coordinates-10, (coordinates-10)-1, (coordinates-10)-2]
  }

  rotate(){}
  move(){}
}

export default PieceL;
import Piece from './Piece.js';

//Box-shaped Piece
class PieceO extends Piece {
  constructor(coordinates) {
    super(coordinates);
    this.name = 'O Piece';
    this.location = [coordinates, coordinates + 1, coordinates - 10, (coordinates - 10) + 1]
  }

  rotate() {

  }

  move() {

  }
}

export default PieceO;
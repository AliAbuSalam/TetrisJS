import Piece from './Piece';

//Box-shaped Piece
class PieceO extends Piece {
  constructor(coordinates) {
    this.location = [coordinates, coordinates + 1, coordinates - 10, (coordinates - 10) + 1]
  }

  rotate() {

  }

  move() {

  }
}
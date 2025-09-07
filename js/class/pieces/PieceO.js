import Piece from './Piece.js';

//Box-shaped Piece
class PieceO extends Piece {
  constructor(coordinates) {
    super(coordinates);
    this.name = 'O Piece';
    this.location = [{
      ...coordinates
    }, {
      ...coordinates,
      x: coordinates.x + 1,
    }, {
      ...coordinates,
      y: coordinates.y - 1
    }, {
      x: coordinates.x + 1,
      y: coordinates.y - 1
    }];
  }

  rotate() {

  }

  move() {

  }
}

export default PieceO;
import Piece from './Piece.js';

//Box-shaped Piece
class PieceO extends Piece {
  constructor(coordinates) {
    super();
    this.name = 'O Piece';
    this.indexOfPivotPoint = 1;
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

  move() {

  }
}

export default PieceO;
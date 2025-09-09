import Piece from './Piece.js';
import { O_PIECE_COLOR } from '../../CONSTANTS.js';

//Box-shaped Piece
class PieceO extends Piece {
  constructor(coordinates) {
    super();
    this.name = 'O Piece';
    this.indexOfPivotPoint = 0;
    this.color = O_PIECE_COLOR
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
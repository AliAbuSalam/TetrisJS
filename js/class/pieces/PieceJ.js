import Piece from './Piece.js';
import { J_PIECE_COLOR } from '../../CONSTANTS.js';

class PieceJ extends Piece {
  constructor(coordinates){
    super();
    this.name = 'J Piece';
    this.indexOfPivotPoint = 0;
    this.color = J_PIECE_COLOR;
    this.location = [{
      ...coordinates,
      y: coordinates.y - 1
    }, {
      ...coordinates
    }, {
      x: coordinates.x + 1,
      y: coordinates.y - 1
    }, {
      x: coordinates.x + 2,
      y: coordinates.y - 1
    }];
  }

}

export default PieceJ;
import Piece from './Piece.js';
import { L_PIECE_COLOR } from '../../CONSTANTS.js';

class PieceL extends Piece {
  constructor(coordinates){
    super();
    this.name = 'L Piece';
    this.indexOfPivotPoint = 0;
    this.color = L_PIECE_COLOR;
    this.location = [{
      ...coordinates,
      y: coordinates.y - 1
    }, {
      ...coordinates
    }, {
      x: coordinates.x - 1,
      y: coordinates.y - 1
    }, {
      x: coordinates.x - 2,
      y: coordinates.y - 1
    }]
  }

  move(){}
}

export default PieceL;
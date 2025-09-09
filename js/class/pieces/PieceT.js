import Piece from './Piece.js';
import { T_PIECE_COLOR } from '../../CONSTANTS.js';

class PieceT extends Piece {
  constructor(coordinates){
    super();
    this.name = 'T Piece';
    this.indexOfPivotPoint = 0;
    this.color = T_PIECE_COLOR;
    this.location = [{
      ...coordinates,
      y: coordinates - 1
    }, {
      ...coordinates
    }, {
      x: coordinates.x - 1,
      y: coordinates.y - 1
    }, {
      x: coordinates.x + 1,
      y: coordinates.y - 1
    }];
  }

  move(){

  }

}

export default PieceT;
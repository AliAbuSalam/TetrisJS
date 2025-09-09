import Piece from './Piece.js';
import { S_PIECE_COLOR } from '../../CONSTANTS.js';

class PieceS extends Piece {
  constructor(coordinates){
    super();
    this.name = 'S Piece';
    this.indexOfPivotPoint = 0;
    this.color = S_PIECE_COLOR;
    this.location = [{
      ...coordinates,
      y: coordinates.y - 1
    }, {
      ...coordinates
    }, {
      ...coordinates,
      x: coordinates.x + 1
    }, {
      x: coordinates.x - 1,
      y: coordinates.y - 1
    }];
  }

  move(){
    
  }
}

export default PieceS;
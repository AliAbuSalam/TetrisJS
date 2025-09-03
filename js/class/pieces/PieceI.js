import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceI extends Piece {
  constructor(coordinates){
    super();
    this.name = 'I Piece';
    this.location = [coordinates+NUMBER_OF_COLUMNS, coordinates, coordinates-1*NUMBER_OF_COLUMNS, coordinates-2*NUMBER_OF_COLUMNS];
  }

  rotate(){
    const pp = this.pivotPoint //shortening pivotPoint;
    if(state === 'default'){
      this.location = [pp - 1, pp, pp + 1, pp + 2];
      this.state = 'rotated';
    } else {
      this.location = [pp + NUMBER_OF_COLUMNS, pp, pp-1*NUMBER_OF_COLUMNS, pp-2*NUMBER_OF_COLUMNS]
      this.state = 'default';
    }
    return [...this.location];
  }

  move(){
    
  }
}

export default PieceI;
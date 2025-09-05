import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceI extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'I Piece';
    this.location = [coordinates+NUMBER_OF_COLUMNS, coordinates, coordinates-1*NUMBER_OF_COLUMNS, coordinates-2*NUMBER_OF_COLUMNS];
  }

  rotate(){    
    const pp = this.pivotPoint
    const objectShapePerState = {
      default: [pp - 1, pp, pp + 1, pp + 2],
      rotated: [pp + NUMBER_OF_COLUMNS, pp, pp - 1*NUMBER_OF_COLUMNS, pp - 2*NUMBER_OF_COLUMNS]
    }
    super.rotate(objectShapePerState);
    return [...this.location];
  }

  move(){
    
  }
}

export default PieceI;
import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceI extends Piece {
  constructor(coordinates){
    super();
    this.name = 'I Piece';
    this.indexOfPivotPoint = 1;
    this.location = [{
      ...coordinates, 
      y: coordinates.y - 2
      },
       coordinates,
      { ...coordinates, 
        y: coordinates.y - 1
      }, 
      {...coordinates, 
        y: coordinates.y - 3
      }]
  }

  rotate(){    
    const pp = this.pivotPoint
    const objectShapePerState = {
      default: [pp + NUMBER_OF_COLUMNS, pp, pp - 1*NUMBER_OF_COLUMNS, pp - 2*NUMBER_OF_COLUMNS],
      rotated: [pp - 1, pp, pp + 1, pp + 2],
    }
    super.rotate(objectShapePerState);
    return [...this.location];
  }

  move(){
    
  }
}

export default PieceI;
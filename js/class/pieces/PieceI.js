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

  move(){
    
  }
}

export default PieceI;
import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceJ extends Piece {
  constructor(coordinates){
    super();
    this.name = 'J Piece';
    this.indexOfPivotPoint = 0;
    console.log('coordinates:', coordinates);
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

  move(){
    
  }
}

export default PieceJ;
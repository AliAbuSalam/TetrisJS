import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceJ extends Piece {
  constructor(coordinates){
    super();
    this.name = 'J Piece';
    this.indexOfPivotPoint = 1;
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

  rotate(){
    const pp = this.pivotPoint;
    const objectShapePerState = {
      default: [pp + NUMBER_OF_COLUMNS, pp , pp + 1, pp + 2],
      rotated: [pp + 2*NUMBER_OF_COLUMNS, pp + NUMBER_OF_COLUMNS, pp, pp - 1]
    }
    super.rotate(objectShapePerState);
    return [...this.location];
  }

  move(){
    
  }
}

export default PieceJ;
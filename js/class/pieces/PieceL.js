import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceL extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'L Piece';
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

  rotate(){
    const pp = this.pivotPoint;
     const objectShapePerState = {
      default: [pp + NUMBER_OF_COLUMNS, pp, pp - 1, pp - 2],
      rotated: [pp + 2*NUMBER_OF_COLUMNS, pp + NUMBER_OF_COLUMNS, pp, pp + 1]
    }
    super.rotate(objectShapePerState);
    return [...this.location];
  }
  move(){}
}

export default PieceL;
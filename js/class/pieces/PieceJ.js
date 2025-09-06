import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceJ extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'J Piece';
    this.location = [coordinates+10, coordinates, coordinates+1, coordinates+2]
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
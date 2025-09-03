import Piece from './Piece.js';
import { NUMBER_OF_COLUMNS } from '../../CONSTANTS.js';

class PieceI extends Piece {
  constructor(coordinates){
    super();
    this.name = 'I Piece';
    this.location = [coordinates, coordinates-NUMBER_OF_COLUMNS, coordinates-2*NUMBER_OF_COLUMNS, coordinates-3*NUMBER_OF_COLUMNS];
  }

  rotate(){
    
  }

  move(){
    
  }
}

export default PieceI;
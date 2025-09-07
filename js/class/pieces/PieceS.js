import Piece from './Piece.js';

class PieceS extends Piece {
  constructor(coordinates){
    super();
    this.name = 'S Piece';
    this.indexOfPivotPoint = 0;
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
import Piece from './Piece.js';

class PieceS extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'S Piece';
    this.indexOfPivotPoint = 1;
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

  rotate(){

  }
  move(){
    
  }
}

export default PieceS;
import Piece from './Piece.js';

class PieceT extends Piece {
  constructor(coordinates){
    super();
    this.name = 'T Piece';
    this.indexOfPivotPoint = 0;
    this.location = [{
      ...coordinates,
      y: coordinates - 1
    }, {
      ...coordinates
    }, {
      x: coordinates.x - 1,
      y: coordinates.y - 1
    }, {
      x: coordinates.x + 1,
      y: coordinates.y - 1
    }];
  }

  move(){

  }

}

export default PieceT;
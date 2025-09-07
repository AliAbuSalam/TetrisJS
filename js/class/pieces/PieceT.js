import Piece from './Piece.js';

class PieceT extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'T Piece';
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

  rotate(){

  }

  move(){

  }

}

export default PieceT;
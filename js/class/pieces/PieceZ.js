import Piece from './Piece.js';

class PieceZ extends Piece {
  constructor(coordinates){
    super();
    this.name = 'Z Piece';
    this.indexOfPivotPoint = 0;
    this.location = [{
      ...coordinates,
      y: coordinates.y - 1
    }, {
      ...coordinates
    }, {
      ...coordinates,
      x: coordinates.x - 1
    }, {
      x: coordinates.x + 1,
      y: coordinates.y - 1
    }]
    // this.location = [coordinates, coordinates - 1, (coordinates -10), (coordinates - 10) + 1]
  }

  move(){

  }
  
}

export default PieceZ;
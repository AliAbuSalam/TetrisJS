import Piece from './Piece.js';

class PieceZ extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'Z Piece';
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

  rotate(){

  }

  move(){

  }
  
}

export default PieceZ;
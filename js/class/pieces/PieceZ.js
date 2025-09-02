import Piece from './Piece.js';

class PieceZ extends Piece {
  constructor(coordinates){
    super();
    this.name = 'Z Piece';
    this.location = [coordinates, coordinates - 1, (coordinates -10), (coordinates - 10) + 1]
  }

  rotate(){

  }

  move(){

  }
  
}

export default PieceZ;
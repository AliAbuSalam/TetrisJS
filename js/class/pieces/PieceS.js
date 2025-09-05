import Piece from './Piece.js';

class PieceS extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'S Piece';
    this.location = [coordinates, coordinates + 1, coordinates-10, (coordinates-10) - 1]
  }

  rotate(){

  }
  move(){
    
  }
}

export default PieceS;
import Piece from './Piece.js';

class PieceJ extends Piece {
  constructor(coordinates){
    this.name = 'J Piece';
    this.location = [coordinates, coordinates-10, (coordinates-10)+1, (coordinates-10)+2]
  }

  rotate(){

  }

  move(){
    
  }
}

export default PieceJ;
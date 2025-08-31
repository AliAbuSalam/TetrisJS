import Piece from './Piece';

class PieceJ extends Piece {
  constructor(coordinates){
    this.location = [coordinates, coordinates-10, (coordinates-10)+1, (coordinates-10)+2]
  }

  rotate(){

  }

  move(){
    
  }
}
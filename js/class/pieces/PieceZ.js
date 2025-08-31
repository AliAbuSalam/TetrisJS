import Piece from './Piece';

class PieceZ extends Piece {
  constructor(coordinates){
    this.location = [coordinates, coordinates - 1, (coordinates -10), (coordinates - 10) + 1]
  }

  rotate(){

  }

  move(){

  }
  
}
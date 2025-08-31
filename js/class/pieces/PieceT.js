import Piece from './Piece';

class PieceT extends Piece {
  constructor(coordinates){
    this.location = [coordinates - 10, (coordinates - 10) - 1, (coordinates -10) + 1, coordinates]
  }
}
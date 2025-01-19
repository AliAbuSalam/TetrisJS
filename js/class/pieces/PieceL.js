class PieceL extends Piece {
  constructor(coordinates){
    this.location = [coordinates, coordinates-10, (coordinates-10)-1, (coordinates-10)-2]
  }

  rotate(){}
  move(){}
}
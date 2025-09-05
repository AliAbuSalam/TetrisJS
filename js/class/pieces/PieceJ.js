import Piece from './Piece.js';

class PieceJ extends Piece {
  constructor(coordinates){
    super(coordinates);
    this.name = 'J Piece';
    this.location = [coordinates+10, coordinates, coordinates+1, coordinates+2]
  }

  rotate(){
    const pp = this.pivotPoint;
    if(state === 'default'){
      this.location = [pp + 20, pp + 10, pp, pp - 1];
      this.state = 'rotated';
    } else {
      this.location = [pp + 10, pp, pp + 1, pp + 2];
      this.state = 'default';
    }
    return [...this.location];
  }

  move(){
    
  }
}

export default PieceJ;
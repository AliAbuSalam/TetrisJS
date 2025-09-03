import { NUMBER_OF_COLUMNS } from "../../CONSTANTS.js";

class Piece {
  name = 'Tetris Piece'
  location = [];
  state = 'default';
  pivotPoint;
  constructor(coordinates){
    if(this.constructor === 'Piece'){
      throw new Error('Abstract Class can\'t be instantiated')
    }
    this.pivotPoint = coordinates;
  }

  getName(){
    return this.name;
  }

  getLocation(){
    return [...this.location];
  }

  rotate(){
    throw new Error('Method rotate() must be implemented')
  }

  moveDown(){
    this.location = this.location.map(c => c - NUMBER_OF_COLUMNS);
  }

  moveLeft(){
    this.location = this.location.map(c => c - 1);
  }

  moveRight(){
    this.location = this.location.map(c => c + 1);
  }
}

export default Piece;
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

  rotate(objectShapePerState){
    //objectShapePerState structure: { default: [objectShape], rotated: [objectShape] }
    if(this.constructor === 'Piece') throw new Error('Rotate method can\'t be called on Abstract Class');
    const pp = this.pivotPoint;
    if(state === 'default'){
      this.location = objectShapePerState.rotated;
      this.state === 'rotated';
    } else {
      this.location = objectShapePerState.default;
      this.state === 'default';
    }
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
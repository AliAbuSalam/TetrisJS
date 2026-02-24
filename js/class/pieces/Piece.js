class Piece {
  name = 'Tetris Piece'
  location = [];
  state = 'default';
  indexOfPivotPoint;
  color;
  tryLocation = [];
  #previousLocation = [];
  constructor(){
    if(this.constructor === 'Piece'){
      throw new Error('Abstract Class can\'t be instantiated')
    }
  }

  getName(){
    return this.name;
  }

  getLocation(){
    return [...this.location];
  }
  
  getColor(){
    return this.color;
  }

  tryRotate(){
    if(this.constructor === 'Piece') throw new Error('Rotate method can\'t be called on Abstract Class');
    // this.previousLocation = this.location;
    const pivotPoint = this.location[this.indexOfPivotPoint];
    this.tryLocation = this.location.map(p => {
      if(p.x === pivotPoint.x && p.y === pivotPoint.y){
        return p
      }
      const pSubtractedWithPivotPoint = { x: p.x - pivotPoint.x, y: p.y - pivotPoint.y};
      const rotatedP = { x: pSubtractedWithPivotPoint.y, y: -pSubtractedWithPivotPoint.x};
      rotatedP.x += pivotPoint.x;
      rotatedP.y += pivotPoint.y;
      return rotatedP;
    })
    return {
      coordinates: [...this.tryLocation],
      pivotIndex: this.indexOfPivotPoint
    };
  }

  tryMoveDown(){
    this.tryLocation = this.location.map(c => ({...c, y: c.y - 1}))
    return this.tryLocation;
  }

  tryMoveLeft(){
    this.tryLocation = this.location.map(c => ({...c, x: c.x - 1}));
    return this.tryLocation;
  }

  tryMoveRight(){
    this.tryLocation = this.location.map(c => ({...c, x: c.x + 1}));
    return this.tryLocation;
  }

  updateLocation(){
    this.location = this.tryLocation;
    return this.location;
  }
  rotatePiece(coordinates){
    this.location = coordinates;
    return coordinates;
  }

}

export default Piece;
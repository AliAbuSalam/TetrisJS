class Piece {
  name = 'Tetris Piece'
  location = [];
  state = 'default';
  indexOfPivotPoint;
  color;
  previousLocation = [];
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

  rotate(){
    if(this.constructor === 'Piece') throw new Error('Rotate method can\'t be called on Abstract Class');
    this.previousLocation = this.location;
    const pivotPoint = this.location[this.indexOfPivotPoint];
    const newLocation = this.location.map(p => {
      if(p.x === pivotPoint.x && p.y === pivotPoint.y){
        return p
      }
      const pSubtractedWithPivotPoint = { x: p.x - pivotPoint.x, y: p.y - pivotPoint.y};
      const rotatedP = { x: pSubtractedWithPivotPoint.y, y: -pSubtractedWithPivotPoint.x};
      rotatedP.x += pivotPoint.x;
      rotatedP.y += pivotPoint.y;
      return rotatedP;
    })
    this.location = newLocation;
    return [...this.location];
  }

  moveDown(){
    this.previousLocation = this.location;
    this.location = this.location.map(c => ({...c, y: c.y - 1}))
  }

  moveLeft(){
    this.previousLocation = this.location;
    this.location = this.location.map(c => ({...c, x: c.x - 1}));
  }

  moveRight(){
    this.previousLocation = this.location;
    this.location = this.location.map(c => ({...c, x: c.x + 1}));
  }

  revertLocation(){
    this.location = this.previousLocation;
    return [...this.location];
  }
}

export default Piece;
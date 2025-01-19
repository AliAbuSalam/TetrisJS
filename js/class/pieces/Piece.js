class Piece {
  constructor(){
    if(this.constructor === 'Piece'){
      throw new Error('Abstract Class can\'t be instantiated')
    }
  }

  rotate(){
    throw new Error('Method rotate() must be implemented')
  }
}
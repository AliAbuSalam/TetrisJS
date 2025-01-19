class Box {
  constructor(coordinates, size){
    this.coordinates = coordinates;
    this.width = size;
    this.height = size;
    this.occupied = false
  }

  get location() {
    return this.coordinates
  }

  changeColor(color){
    
  }
}
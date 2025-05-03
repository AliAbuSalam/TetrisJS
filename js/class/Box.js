class Box {
  constructor(coordinates, /*size,*/ id){
    this.coordinates = coordinates;
    // this.width = size;
    // this.height = size;
    this.occupied = false

    this.element = document.createElement('div');
    this.id = `block-${id}`;
    this.element.id = this.id;
    const blockNumber= document.createTextNode(id);
    this.element.appendChild(blockNumber);
    this.element.className = 'field-block';
  }

  get location() {
    return this.coordinates
  }

  changeColor(color){
    
  }
}

export default Box;
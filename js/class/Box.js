class Box {
  color;
  constructor(coordinates, /*size,*/ id){
    this.coordinates = coordinates;
    // this.width = size;
    // this.height = size;
    this.currentState = 'empty';

    this.element = document.createElement('div');
    this.id = `block-${id}`;
    this.element.id = this.id;
    const blockNumber= document.createTextNode(id);
    this.element.appendChild(blockNumber);
    this.element.className = 'field-block';
  }

  get location() {
    return this.coordinates;
  }

  changeState(state, color){
    this.element.classList.remove(currentState);
    this.element.classList.add(state);
    this.color = color;
  }
}

export default Box;
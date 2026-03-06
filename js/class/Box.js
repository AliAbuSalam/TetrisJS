class Box {
  color;
  constructor(coordinates, /*size,*/ id){
    this.coordinates = coordinates;
    // this.width = size;
    // this.height = size;
    this.currentState = 'empty';

    this.element = document.createElement('div');
    this.leftSide = document.createElement('div');
    this.rightSide = document.createElement('div');
    this.topSide = document.createElement('div');
    this.bottomSide = document.createElement('div');
    this.centerSide = document.createElement('div');

    const boxPartVertical = [this.leftSide, this.rightSide];
    const boxPartHorizontal = [this.topSide, this.bottomSide];
    
    boxPartHorizontal.forEach(part => part.classList.add('box-child-horizontal'));
    boxPartVertical.forEach(part => part.classList.add('box-child-vertical'));
    this.element.classList.add('box-parent');
    this.leftSide.classList.add('box-left');
    this.rightSide.classList.add('box-right');
    this.topSide.classList.add('box-top');
    this.bottomSide.classList.add('box-bottom');
    this.centerSide.classList.add('box-center');
    // LET'S TRY TO MAKE MULTIPLE TRIANGLE STACK ON TOP EACH OTHER INSTEAD OF THIS!!!!!!
    
    this.element.append(this.leftSide, this.rightSide, this.topSide, this.centerSide, this.bottomSide);

    this.id = `block-${id}`;
    this.element.id = this.id;
    this.element.classList.add('field-block');
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
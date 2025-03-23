import Row from './Row';

class HiddenRow extends Row(){
  constructor(rowNumber){
    super(rowNumber);
    this.className = 'hidden-row';
  }
}

export default HiddenRow;
import Row from "./Row";

class VisibleRow extends Row(){
  constructor(rowNumber){
    console.log('create new object VisibleRow')
    super(rowNumber);
    this.className = 'visible-row'
  }
}

export default VisibleRow;
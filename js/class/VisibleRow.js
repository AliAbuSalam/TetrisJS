import Row from "./Row.js";

class VisibleRow extends Row {
  constructor(rowNumber){
    super(rowNumber);
    this.className = 'visible-row'
  }
}

export default VisibleRow;
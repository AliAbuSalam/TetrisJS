import Row from "./Row.js";

class VisibleRow extends Row {
  constructor(rowNumber, columnNumber){
    super(rowNumber, columnNumber);
    this.className = 'visible-row'
  }
}

export default VisibleRow;
import VisibleRow from './VisibleRow.js';
import HiddenRow from './HiddenRow.js';
import { NUMBER_OF_COLUMNS, NUMBER_OF_VISIBLE_ROWS, NUMBER_OF_HIDDEN_ROWS } from '../CONSTANTS.js';

class Field {
  fieldState = [];
  static spawnCoordinates = {
    x: Math.ceil((NUMBER_OF_COLUMNS - 1)/2), // number of columns is substracted by one because the coordinates starts at 0
    y: NUMBER_OF_VISIBLE_ROWS + NUMBER_OF_HIDDEN_ROWS - 1
  }

  constructor(rows, columns, hiddenRows){
    this.field = document.getElementsByClassName('field')[0];
    for(let i = hiddenRows + rows; i > rows; i--){
      const rowObj = new HiddenRow(i, columns);
      //not sure how i'm gonna deal with hidden row yet
    }
    for(let i = rows - 1; i >= 0; i--){
      const rowObj = new VisibleRow(i, columns);
      this.field.appendChild(rowObj.rowElement);
    }
    for(let i = 0; i < hiddenRows + rows; i++){//create 2d array
      const rowState = [];
      for(let j = 0; j < columns; j++){
        rowState.push(0)
      }
      this.fieldState.push(rowState);
    }
  }

  getRightBound(){
    return [...this.rightBound];
  }

  getLeftBound(){
    return [...this.leftBound];
  }

  getBottomBound(){
    return [...this.bottomBound];
  }
} 

export default Field;
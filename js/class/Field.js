import VisibleRow from './VisibleRow.js';
import HiddenRow from './HiddenRow.js';
import { NUMBER_OF_COLUMNS, NUMBER_OF_VISIBLE_ROWS, NUMBER_OF_HIDDEN_ROWS } from '../CONSTANTS.js';

class Field {
  static spawnCoordinates = (NUMBER_OF_VISIBLE_ROWS + NUMBER_OF_HIDDEN_ROWS - 1)*NUMBER_OF_COLUMNS + (Math.ceil(NUMBER_OF_COLUMNS/2));
  rightBound = [];
  leftBound = [];

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

    const numberOfBlocks = (NUMBER_OF_VISIBLE_ROWS + NUMBER_OF_HIDDEN_ROWS)*NUMBER_OF_COLUMNS;
    //finding right bound of the field
    let i = 0;
    while(i < numberOfBlocks){
      i += NUMBER_OF_COLUMNS
      this.rightBound.push(i);
    }

    //finding left bound of the field
    i = 1;
    while(i < numberOfBlocks){
      if(i === 1) this.leftBound.push(i);
      i +=NUMBER_OF_COLUMNS;
      if(i <= numberOfBlocks) this.leftBound.push(i);
    }
  }

  getRightBound(){
    return [...this.rightBound];
  }

  getLeftBound(){
    return [...this.leftBound];
  }
} 

export default Field;
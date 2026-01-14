import VisibleRow from './VisibleRow.js';
import HiddenRow from './HiddenRow.js';
import { NUMBER_OF_COLUMNS, NUMBER_OF_VISIBLE_ROWS, NUMBER_OF_HIDDEN_ROWS } from '../CONSTANTS.js';

class Field {
  fieldState = [];
  static spawnCoordinates = {
    x: Math.ceil((NUMBER_OF_COLUMNS - 1)/2), // number of columns is substracted by one because the coordinates starts at 0
    y: NUMBER_OF_VISIBLE_ROWS + NUMBER_OF_HIDDEN_ROWS - 2
  }
  xLowerBound = 0;
  xUpperBound = NUMBER_OF_COLUMNS - 1;
  ylowerBound = 0;
  yUpperBound = NUMBER_OF_VISIBLE_ROWS + NUMBER_OF_HIDDEN_ROWS - 1;

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

  checkGridAvailability(coordinates){
    const gridAvailability = [];
    const filteredCoordinates = this.#checkCoordinatesValidity(coordinates);
    filteredCoordinates.forEach(c => {
      const valueToPush = !c.x || !c.y ? false : this.fieldState[c.y][c.x];
      gridAvailability.push(valueToPush);
    })
    return gridAvailability;
  }

  #checkCoordinatesValidity(coordinates){
    return coordinates.map(c => {
      return ({
        x: c.x < this.xLowerBound || c.x > this.xUpperBound ? false : c.x,
        y: c.y < this.yLowerBound || c.y > this.yUpperBound ? false : c.y
      });
    })
  }

  renderField(){
    for(let i = 0; i < NUMBER_OF_VISIBLE_ROWS; i++){
      const row = this.fieldState[i]
      const rowIndex = i;
      row.forEach((b, blockIndex) => {
        const blockNumber = (rowIndex * 10) + blockIndex;
        const blockElement = document.getElementById(`block-${blockNumber}`)
        blockElement.style.backgroundColor = b !== 0 ? b : '';
      })
    }
  }
} 

export default Field;
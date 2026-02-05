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
  yLowerBound = 0;
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
    let filteredCoordinates;
    if(movementType !== 'rotate'){
      filteredCoordinates = this.#checkCoordinatesValidity(coordinates);
    } else {
      filteredCoordinates = coordinates;
    }
    filteredCoordinates.forEach(c => {
      const valueToPush = c.x === false || c.y === false ? false : this.fieldState[c.y][c.x];
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
#checkCoordinatesValidityBool(coordinates){
    const cValidity = this.#checkCoordinatesValidity(coordinates);
    const cValidityResult = cValidity.filter(c => {
      if(c.x && c.y){
        return false
      } else true
    })
    return cValidityResult.length === 0
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

  renderPiece({ prevCoordinates, coordinates, color }){
    //don't forget to change validate the hidden row coordinates
    const prevCValidity = this.#checkCoordinatesValidityBool(prevCoordinates);
    if(!prevCValidity){
      throw new Error('prevCoordinates is not valid');
    }
    const cValidity = this.#checkCoordinatesValidityBool(coordinates);    
    if(!cValidity){
      throw new Error ('coordinates is not valid');
    }

    const filterHiddenRowCoordinates = (coor) => coor.filter(c => c.y < NUMBER_OF_VISIBLE_ROWS);
    const coordinatesWithoutHiddenRows = filterHiddenRowCoordinates(coordinates);
    const prevCWithoutHiddenRows = filterHiddenRowCoordinates(prevCoordinates);

    const blockNumbersToRender = coordinatesWithoutHiddenRows.map(c => c.y*10 + c.x);
    const blocksToClear = prevCWithoutHiddenRows.map(c => c.y*10 + c.x)
      .filter(blockNumber => !blockNumbersToRender.includes(blockNumber))
      .map(blockNumber => {
        const block = document.getElementById(`block-${blockNumber}`);
        return block;
    })

    const blocksToRender = [];
    let failedToRenderObj = undefined;

    for (const c of coordinatesWithoutHiddenRows){
      const blockNumber = c.y*10 + c.x;
      const block = document.getElementById(`block-${blockNumber}`);
      if(block.style.backgroundColor !== ''){
        failedToRenderObj = {
          status: 'error',
          message: `block-${blockNumber} is already occupied`
        }
        break;
      } else {
        blocksToRender.push(block);
      }
    }

    if(failedToRenderObj){
      return failedToRenderObj
    }

    const updateBlockDOM = (block, type) => block.style.color = type === 'clear' ? '' : color;
    
    blocksToClear.forEach((block) => updateBlockDOM(block, 'clear'));

    blocksToRender.forEach((block) => updateBlockDOM(block, 'render'));
    return {
      status: 'success',
      message: ''
    }
  }
} 

export default Field;
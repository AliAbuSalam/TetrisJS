import Box from './Box.js';

class Row {
  constructor(rowNumber, columnNumber){
    this.id = `row-${rowNumber}`;
    this.rowElement = document.createElement('div');

    const createBlockElements = (rowNumber, columnNumber) => {
      const blockArray = new Map();
      for(let i = 1; i <= columnNumber; i++){
        const block = new Box({x: rowNumber, y: i}, ((rowNumber * columnNumber) + i))
        blockArray.set(i, block);
        this.rowElement.appendChild(block.element);
      }
      return blockArray;
    }
    
    this.blocks = createBlockElements(rowNumber, columnNumber);
  }
}

export default Row;
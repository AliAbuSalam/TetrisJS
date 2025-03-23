class Row {
  constructor(rowNumber, columnNumber){
    this.id = `row-${rowNumber}`;
    this.rowElement = document.createElement('div');

    const createBlockElements = (rowNumber, columnNumber) => {
      const blockArray = new Map();
      for(let i = 1; i <= columnNumber; i++){
        const block = document.createElement('div');
        block.id = `block-${(rowNumber * columnNumber) + i}`;
        const blockNumber= document.createTextNode(`${(rowNumber * columnNumber) + i}`);
        block.appendChild(blockNumber);
        block.className = 'field-block';
        blockArray.set(i, block);
        this.rowElement.appendChild(block);
      }
      return blockArray;
    }
    
    this.blocks = createBlockElements(rowNumber, columnNumber);
  }
}

export default Row;
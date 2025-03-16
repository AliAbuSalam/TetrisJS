class Row {
  constructor(rowNumber){
    this.id = `row-${rowNumber}`;

    const getBlockElements = (rowNumber) => {
      const blockArray = new Map();
      for(let i = 1; i <= 10; i++){
        const block = Document.GetElementById(rowNumber * 10 + i);
        blockArray.set(i, block);
      }
      return blockArray;
    }
    
    this.blocks = getBlockElements(rowNumber);
  }
}

export default Row;
class Row {
  constructor(rowNumber){
    this.id = `row-${rowNumber}`;

    const getBlockElements = (rowNumber) => {
      const blockArray = [];
      for(let i = 1; i <= 10; i++){
        const block = Document.GetElementById(rowNumber * 10 + i);
        blockArray.push(block);
      }
      return blockArray;
    }
    
    this.blocks = getBlockElements(rowNumber);
  }
}
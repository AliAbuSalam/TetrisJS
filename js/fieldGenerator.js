console.log('generating field...');
const generateField = (numberOfBlocks) => {
  const fieldContainer = document.getElementById('field');

  for(i = 0;i < numberOfBlocks; i++ ){
    const block = document.createElement('div')
    block.className = 'field-block'
    block.id = `block${i+1}`
    fieldContainer.appendChild(block);
  }
  
}


generateField(220)
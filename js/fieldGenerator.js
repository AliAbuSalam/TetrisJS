import Field from './class/Field.js';
const generateField = (rows, hiddenRows, columns) => {
  const field = new Field(rows, columns, hiddenRows);
  // const fieldContainer = document.getElementsByClassName('field')[0];

  // for(let i = rows - 1; i >= 0; i--){
  //   const row = document.createElement('div');
  //   for(let j = 0; j < columns; j++){
  //     const block = document.createElement('div');
  //     const blockNumber = document.createTextNode(`${(i * 10) + (j + 1)}`);
  //     block.appendChild(blockNumber);
  //     block.className = 'field-block';
  //     block.id = `block-${(i * 10) + (j + 1)}`;
  //     row.appendChild(block); 
  //   }
  //   fieldContainer.appendChild(row);
  // }
}

export default generateField;
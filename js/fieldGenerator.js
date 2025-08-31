import Field from './class/Field.js';
const generateField = (rows, hiddenRows, columns) => {
  const field = new Field(rows, columns, hiddenRows);
}

export default generateField;
import generateField from './fieldGenerator.js'
import PiecesGenerator from './class/PiecesGenerator.js'
import { NUMBER_OF_COLUMNS, NUMBER_OF_HIDDEN_ROWS, NUMBER_OF_VISIBLE_ROWS } from './CONSTANTS.js';
generateField(NUMBER_OF_VISIBLE_ROWS, NUMBER_OF_HIDDEN_ROWS, NUMBER_OF_COLUMNS);

const piecesGenerator = new PiecesGenerator();
piecesGenerator.generateNewPool();
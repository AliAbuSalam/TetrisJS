import generateField from './fieldGenerator.js'
import PiecesGenerator from './class/PiecesGenerator.js'
import { NUMBER_OF_COLUMNS, NUMBER_OF_HIDDEN_ROWS, NUMBER_OF_VISIBLE_ROWS } from './CONSTANTS.js';
import GameEnvironment from './class/GameEnvironment.js';

const field = generateField(NUMBER_OF_VISIBLE_ROWS, NUMBER_OF_HIDDEN_ROWS, NUMBER_OF_COLUMNS);
const gameEnv = new GameEnvironment(field);

const piecesGenerator = new PiecesGenerator();

while(gameEnv.getGameState() !== 'End'){
  const piece = piecesGenerator.generatePiece();
  gameEnv.setActivePiece(piece);
  gameEnv.moveActivePiece();
}

gameEnv.setActivePiece(piece);
gameEnv.moveActivePiece();
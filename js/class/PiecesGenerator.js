import IPiece from './pieces/PieceI.js';
import JPiece from './pieces/PieceJ.js';
import LPiece from './pieces/PieceL.js';
import OPiece from './pieces/PieceO.js';
import SPiece from './pieces/PieceS.js';
import TPiece from './pieces/PieceT.js';
import ZPiece from './pieces/PieceZ.js';
import { NUMBER_OF_VISIBLE_ROWS, NUMBER_OF_HIDDEN_ROWS, NUMBER_OF_COLUMNS } from '../CONSTANTS.js';

class PiecesGenerator {
  poolOfPieces = [];
  static spawnCoordinates = (NUMBER_OF_VISIBLE_ROWS + NUMBER_OF_HIDDEN_ROWS - 1)*NUMBER_OF_COLUMNS + (Math.ceil(NUMBER_OF_COLUMNS/2));

  generateNewPool(){
    const arrayOfPieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    const arrayOfPiecesLength = arrayOfPieces.length;
    for(let i = 0; i < arrayOfPiecesLength; i++){
      const arrayIndex = Math.floor(Math.random() * arrayOfPieces.length);
      const piece = arrayOfPieces[arrayIndex];
      this.poolOfPieces.push(piece)
      arrayOfPieces.splice(arrayIndex, 1);
    }
  }

  generatePiece(){
    if(!this.poolOfPieces.length){
      this.generateNewPool();
    }
    const pieceType = this.poolOfPieces.shift();
    let piece;
    switch(pieceType){
      case 'I':
        piece = new IPiece(this.spawnCoordinates);
        break;
      case 'J':
        piece = new JPiece(this.spawnCoordinates);
        break;
      case 'L':
        piece = new LPiece(this.spawnCoordinates);
        break;
      case 'O':
        piece = new OPiece(this.spawnCoordinates);
        break;
      case 'S':
        piece = new SPiece(this.spawnCoordinates);
        break;
      case 'T':
        piece = new TPiece(this.spawnCoordinates);
        break;
      default:
        piece = new ZPiece(this.spawnCoordinates);
        break;
    }
    return piece;
  }  
}

export default PiecesGenerator;
import IPiece from './pieces/PieceI.js';
import JPiece from './pieces/PieceJ.js';
import LPiece from './pieces/PieceL.js';
import OPiece from './pieces/PieceO.js';
import SPiece from './pieces/PieceS.js';
import TPiece from './pieces/PieceT.js';
import ZPiece from './pieces/PieceZ.js';
import Field from './Field.js';

class PiecesGenerator {
  poolOfPieces = [];

  generateNewPool(){
    if(this.poolOfPieces.length > 0){
      throw new Error('poolOfPieces is not empty yet!!!');
    }
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
        piece = new IPiece(Field.spawnCoordinates);
        break;
      case 'J':
        piece = new JPiece(Field.spawnCoordinates);
        break;
      case 'L':
        piece = new LPiece(Field.spawnCoordinates);
        break;
      case 'O':
        piece = new OPiece(Field.spawnCoordinates);
        break;
      case 'S':
        piece = new SPiece(Field.spawnCoordinates);
        break;
      case 'T':
        piece = new TPiece(Field.spawnCoordinates);
        break;
      default:
        piece = new ZPiece(Field.spawnCoordinates);
        break;
    }
    return piece;
  }  
}

export default PiecesGenerator;
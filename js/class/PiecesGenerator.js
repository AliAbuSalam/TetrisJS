import IPiece from './pieces/PieceI.js';
import JPiece from './pieces/PieceJ.js';
import LPiece from './pieces/PieceL.js';
import OPiece from './pieces/PieceO.js';
import SPiece from './pieces/PieceS.js';
import TPiece from './pieces/PieceT.js';
import ZPiece from './pieces/PieceZ.js';

class PiecesGenerator {
  poolOfPieces = [];

  generateNewPool(){
    console.log('generating new pool')
    const arrayOfPieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    const arrayOfPiecesLength = arrayOfPieces.length;
    for(let i = 0; i < arrayOfPiecesLength; i++){
      const arrayIndex = Math.floor(Math.random() * arrayOfPieces.length);
      const piece = arrayOfPieces[arrayIndex];
      this.poolOfPieces.push(piece)
      arrayOfPieces.splice(arrayIndex, 1);
    }
    console.log('arrayOfPieces: ', arrayOfPieces)
    console.log('poolOfPieces: ', this.poolOfPieces);
  }

  generatePiece(){
    
  }  
}

export default PiecesGenerator;
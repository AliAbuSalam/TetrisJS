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
        piece = new IPiece();
        return;
      case 'J':
        piece = new JPiece();
        return;
      case 'L':
        piece = new LPiece();
        return;
      case 'O':
        piece = new OPiece();
        return;
      case 'S':
        piece = new SPiece();
        return;
      case 'T':
        piece = new TPiece();
        return;
      case 'Z':
        piece = new TPiece();
        return;
    }
  }  
}

export default PiecesGenerator;
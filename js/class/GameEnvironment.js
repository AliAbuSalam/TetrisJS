import { BASE_SPEED, SPEED_INTERVAL } from "../CONSTANTS.js";
const GameState = {
  Active: 'Active', //Active game state means that there's an active piece currently on the board
  Inactive: 'Inactive', //Inactive game state means that there isn't any active piece. 
                        //It means that the game is in the middle of preparing the next active piece or calculating score, etc.
  End: 'End', //End game state means that the game has ended.
}
const ActivePieceState = {
  Initialized: 'Initialized',
  Moving: 'Moving',
  Idle: 'Idle',
}

class GameEnvironment {
  constructor(field){
    this.level = 1;
    this.score = 0;
    this.currentSpeed = BASE_SPEED;
    this.speedInterval = SPEED_INTERVAL;
    this.activePiece;
    this.field = field;
    this.gameState = GameState.Inactive;
    this.activePieceState = undefined;
  }

  setActivePiece(piece){
    this.activePiece = piece;
    this.activePieceState = ActivePieceState.Initialized;
  }

  moveActivePiece(){
    this.gameState = GameState.Active;
    this.activePieceState = ActivePieceState.Moving;
    this.activePieceState = ActivePieceState.Idle;
    const intervalId = setInterval(() => {
      const coordinates = activePiece.moveDown();
      const gridAvailability = this.field.checkGridAvailability(coordinates);
      const moveValidity = gridAvailability.reduce((prevValue, value) => {
        return (value === 0) && prevValue
        //if any of the value is not equal 0, then the move isn't valid
      }, true)
      if(!moveValidity){
        activePiece.revertLocation();
        this.gameState = GameState.Inactive;
        this.activePieceState = undefined;
        clearInterval(intervalId)
      }
      this.activePieceState = ActivePieceState.Idle;
    }, 1000)
  }

  getGameState(){
    return this.gameState;
  }
}

export default GameEnvironment;
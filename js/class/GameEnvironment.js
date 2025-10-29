import { BASE_SPEED, SPEED_INTERVAL } from "../CONSTANTS.js";
const GameState = {
  Active: 'Active',
  Inactive: 'Inactive',
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
  }

  setActivePiece(piece){
    console.log('setting active piece');
    console.log('piece: ', piece)
    this.activePiece = piece;
  }

  moveActivePiece(){
    this.gameState = GameState.Active;
    const activePiece = this.activePiece;
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
        clearInterval(intervalId)
      }
    }, 1000)
  }

  getGameState(){
    return this.gameState;
  }
}

export default GameEnvironment;
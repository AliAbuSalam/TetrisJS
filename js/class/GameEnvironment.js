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
    this.allowPlayerMovement = true;
  }

  setActivePiece(piece){
    this.activePiece = piece;
    this.activePieceState = ActivePieceState.Initialized;
  }

  moveActivePiece(){
    this.gameState = GameState.Active;
    const intervalId = setInterval(() => {
      this.activePieceState = ActivePieceState.Moving;
      const coordinates = this.activePiece.tryMoveDown();
      const moveValidity = this.#checkMoveValidity(coordinates)
      if(!moveValidity){
        this.gameState = GameState.Inactive;
        this.activePieceState = undefined;
        clearInterval(intervalId)
        return;
      } else {
        this.#renderMovement(this.activePiece);
        this.activePieceState = ActivePieceState.Idle;
      }
    }, 1000)
  }

  #moveActivePieceSideways(movementType){
    if(movementType !== 'moveRight' && movementType !== 'moveLeft'){
      throw new Error('movement type has to be  right or left');
    }
    this.activePieceState = ActivePieceState.Moving;
    const coordinates = movementType === 'moveRight' ? this.activePiece.tryMoveRight() : this.activePiece.tryMoveLeft();
    const moveValidity = this.#checkMoveValidity(coordinates);
    if(moveValidity){
      this.#renderMovement(this.activePiece);
    }
    this.activePieceState = ActivePieceState.Idle;
  }

  #checkMoveValidity(coordinates){
    const gridAvailability = this.field.checkGridAvailability(coordinates);
    return gridAvailability.reduce((prevValue, value) => {
      return (value === 0) && prevValue
      //if any of the value is not equal 0, then the move isn't valid
    }, true)
  }

  #renderMovement(piece){
    const prevCoordinates = piece.getLocation();
    piece.updateLocation();
    this.field.renderPiece({
      prevCoordinates,
      coordinates: piece.getLocation(),
      color: piece.getColor()
    })
    return {
      status: 'success'
    }
  }

  getGameState(){
    return this.gameState;
  }

  getActivePieceState(){
    return this.activePieceState;
  }

  handlePlayerControl(movementType){

    if(!this.allowPlayerMovement || this.activePieceState === ActivePieceState.Moving || this.gameState !== GameState.Active){
      return;
    }
    this.allowPlayerMovement = false;
    switch(movementType){
      case 'moveRight':
        this.#moveActivePieceSideways('moveRight');
        break;
      case 'moveLeft':
        this.#moveActivePieceSideways('moveLeft');
    }
    this.allowPlayerMovement = true;
  }
}

export default GameEnvironment;
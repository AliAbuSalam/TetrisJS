import { MOVE_DOWN_PIECE, MOVE_LEFT_PIECE, MOVE_RIGHT_PIECE, ROTATE_PIECE } from "../CONSTANTS.js";


class PlayerControl {
  moveDownButton = MOVE_DOWN_PIECE;
  moveLeftButton = MOVE_LEFT_PIECE;
  moveRightButton = MOVE_RIGHT_PIECE;
  rotateButton = ROTATE_PIECE;
  playerControlDOM;
  moveDownEvent;
  moveLeftEvent;
  moveRightEvent;
  rotateEvent;
  handleControl;
  
  constructor(){
    this.playerControlDOM = document.getElementById('player-control')
    this.moveDownEvent = new CustomEvent('moveDown');
    this.moveLeftEvent = new CustomEvent('moveLeft');
    this.moveRightEvent = new CustomEvent('moveRight');
    this.rotateEvent = new CustomEvent('rotate');
    
    this.handleControl = (event) => {
      const buttonPressed = event.key.toLowerCase();
      switch(buttonPressed){
        case this.moveDownButton:
          this.playerControlDOM.dispatchEvent(moveDown);
          break;
        case this.moveRightButton:
          this.playerControlDOM.dispatchEvent(moveRight)
          break;
        case this.moveLeftButton:
          this.playerControlDOM.dispatchEvent(moveLeft);
          break;
        case this.rotateButton:
          this.playerControlDOM.dispatchEvent(rotate)
          break;
      }
  }
  }
  addControlEventListener(domObject){
    domObject.addEventListener('keydown', this.handleControl);
  }
  
}

export default PlayerControl;
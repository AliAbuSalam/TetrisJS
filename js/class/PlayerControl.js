import { MOVE_DOWN_PIECE, MOVE_LEFT_PIECE, MOVE_RIGHT_PIECE, ROTATE_PIECE } from "../CONSTANTS.js";


class PlayerControl {
  moveDownButton = MOVE_DOWN_PIECE;
  moveLeftButton = MOVE_LEFT_PIECE;
  moveRightButton = MOVE_RIGHT_PIECE;
  rotateButton = ROTATE_PIECE;
  moveDownEvent;
  moveLeftEvent;
  moveRightEvent;
  rotateEvent;
  
  constructor(){}

  addControlEventDispatcher(domObject, handleMovementFunction){
    const handleControl = (event) => {
      const buttonPressed = event.key.toLowerCase();
      switch(buttonPressed){
        case this.moveDownButton:
          handleMovementFunction('moveDown');
          break;
        case this.moveRightButton:
          handleMovementFunction('moveRight');
          break;
        case this.moveLeftButton:
          handleMovementFunction('moveLeft');
          break;
        case this.rotateButton:
          handleMovementFunction('rotate');
          break;
      }
    }
    domObject.addEventListener('keydown', handleControl);
  }
}

export default PlayerControl;
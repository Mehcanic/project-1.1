function playerMovement(player) {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      // Player 1 movement
      case player.keyUp.key:
        player.keyUp.pressed = true;
        break;
      case player.keyDown.key:
        player.keyDown.pressed = true;
        break;
      case player.keyLeft.key:
        player.keyLeft.pressed = true;
        break;
      case player.keyRight.key:
        player.keyRight.pressed = true;
        break;
      case player.keyShoot.key:
        player.keyShoot.pressed = true;
        break;
    }
  });
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      // Player 1 movement
      case player.keyUp.key:
        player.keyUp.pressed = false;
        break;
      case player.keyDown.key:
        player.keyDown.pressed = false;
        break;
      case player.keyLeft.key:
        player.keyLeft.pressed = false;
        break;
      case player.keyRight.key:
        player.keyRight.pressed = false;
        break;
      case player.keyShoot.key:
        player.keyShoot.pressed = false;
        break;
    }
  });
}


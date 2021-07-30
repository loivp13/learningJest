let attackShip = require("./ship_methods").attackShip;
function checkGameStatus(players) {
  return false;
}

function takeTurn(opposingPlayer, guessFunction) {
  let coordinates = guessFunction();
  attackShip(opposingPlayer, coordinates);
  var gameOver = checkGameStatus();
  return gameOver;
}

module.exports = { checkGameStatus, takeTurn };

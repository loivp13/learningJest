function checkForShip(player, coordinates) {
  let shipPresent, ship;
  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter((actualCoordinate) => {
      return (
        actualCoordinate[0] === coordinates[0] &&
        actualCoordinate[1] === coordinates[1]
      );
    });
    if (shipPresent.length >= 1) {
      return ship;
    }
  }

  return false;
}

function damageShip(ship, coordinates) {
  ship.damageShip.push(coordinates);
}

function attackShip(player, coordiates) {
  let presentShip = checkForShip(player, coordiates);
  if (presentShip) {
    damageShip(presentShip, coordiates);
  }
}

module.exports = { checkForShip, damageShip, attackShip };

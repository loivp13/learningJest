describe("test pending", () => {
  test.todo("tells when game is over");
});

describe("takeTurn", () => {
  let takeTurn = require("./game_instance").takeTurn;
  let guess, player;

  beforeEach(() => {
    guess = () => {
      return [0, 0];
    };
    player = {
      ships: [{ locations: [[0, 0]], damageShip: [] }],
    };
  });

  it("should return false if the game ends", function () {
    let actual = takeTurn(player, guess);
    expect(actual).toBe(false);
  });
});

describe("testing battleShipEngine", () => {
  let checkForShip = require("../game_logic/ship_methods").checkForShip;

  test("should correctly report no ship at given player cooridnate", () => {
    let player = {
      ships: [{ locations: [[0, 0]] }],
    };
    expect(checkForShip(player, [9, 9])).toBe(false);
  });

  test("should correctly report a ship located at given player cooridnate", () => {
    let player = {
      ships: [{ locations: [[0, 0]] }],
    };
    expect(checkForShip(player, [0, 0])).toBe(true);
  });

  test("should handle ship located at more than one cooridnate", () => {
    let player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 0])).toBe(true);
    expect(checkForShip(player, [0, 0])).toBe(true);
    expect(checkForShip(player, [9, 9])).toBe(false);
  });

  test("should multiple ships located at more than one cooridnate", () => {
    let player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 1],
            [1, 2],
          ],
        },
        {
          locations: [
            [3, 1],
            [3, 2],
            [3, 3],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 1])).toBe(true);
    expect(checkForShip(player, [0, 0])).toBe(true);
    expect(checkForShip(player, [1, 1])).toBe(true);
    expect(checkForShip(player, [3, 3])).toBe(true);
    expect(checkForShip(player, [9, 9])).toBe(false);
  });
});

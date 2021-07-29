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
    expect(checkForShip(player, [0, 0])).toEqual({ locations: [[0, 0]] });
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
    expect(checkForShip(player, [0, 0])).toEqual({
      locations: [
        [0, 0],
        [0, 1],
      ],
    });
    expect(checkForShip(player, [0, 1])).toEqual({
      locations: [
        [0, 0],
        [0, 1],
      ],
    });
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
    expect(checkForShip(player, [0, 1])).toEqual({
      locations: [
        [0, 0],
        [0, 1],
      ],
    });
    expect(checkForShip(player, [0, 0])).toEqual({
      locations: [
        [0, 0],
        [0, 1],
      ],
    });
    expect(checkForShip(player, [1, 1])).toEqual({
      locations: [
        [1, 1],
        [1, 2],
      ],
    });
    expect(checkForShip(player, [3, 3])).toEqual({
      locations: [
        [3, 1],
        [3, 2],
        [3, 3],
      ],
    });
    expect(checkForShip(player, [9, 9])).toBe(false);
  });
});

describe("damageShip", function () {
  let damageShip = require("../game_logic/ship_methods").damageShip;

  test("should register damage on a given ship at a given location", function () {
    let ship = {
      locations: [0, 0],
      damageShip: [],
    };
    damageShip(ship, [0, 0]);
    expect(ship.damageShip).not.toHaveLength(0);
    expect(ship.damageShip).toEqual(expect.arrayContaining([[0, 0]]));
  });
});

describe("attackShip", function () {
  let attackShip = require("../game_logic/ship_methods").attackShip;
  let player = {
    ships: [
      {
        locations: [
          [0, 0],
          [0, 1],
        ],
        damageShip: [],
      },
      {
        locations: [
          [1, 1],
          [1, 2],
        ],
        damageShip: [],
      },
      {
        locations: [
          [3, 1],
          [3, 2],
          [3, 3],
        ],
        damageShip: [],
      },
    ],
  };
  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
          damageShip: [],
        },
        {
          locations: [
            [1, 1],
            [1, 2],
          ],
          damageShip: [],
        },
        {
          locations: [
            [3, 1],
            [3, 2],
            [3, 3],
          ],
          damageShip: [],
        },
      ],
    };
  });

  test("should update damageShip of correct ship if coordinates matches", () => {
    attackShip(player, [0, 0]);
    expect(player.ships[0].damageShip).not.toEqual([]);
    expect(player.ships[0].damageShip).toEqual([[0, 0]]);
    attackShip(player, [3, 1]);
    expect(player.ships[2].damageShip).toEqual([[3, 1]]);
  });

  test("should not update if coordinates doent not match any ships", () => {
    attackShip(player, [5, 0]);
    expect(player).toEqual({
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
          damageShip: [],
        },
        {
          locations: [
            [1, 1],
            [1, 2],
          ],
          damageShip: [],
        },
        {
          locations: [
            [3, 1],
            [3, 2],
            [3, 3],
          ],
          damageShip: [],
        },
      ],
    });
  });
});

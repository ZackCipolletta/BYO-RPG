import Monster from "../src/js/monster.js";

describe('Monster', () => {

  test("should create a monster object with attributes", () => {
    const monster = new Monster('zombie', 15, 5);
    expect(monster.name).toEqual('zombie');
    expect(monster.hp).toEqual(15);
    expect(monster.ap).toEqual(5);
  });

});


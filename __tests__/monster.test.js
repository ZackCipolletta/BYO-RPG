import { Monster, createZombie } from "../src/js/monster.js";

describe('Monster', () => {

  test("should create a monster object with attributes", () => {
    const monster = new Monster('zombie', 15, 5);
    expect(monster.name).toEqual('zombie');
    expect(monster.hp).toEqual(15);
    expect(monster.ap).toEqual(5);
  });
});

describe('createZombie', () => {
  test('should call the createMage function', () => {
    let monster = new Monster ("zombie", 15, 5);
    expect(createZombie(monster).name).toEqual("zombie");
    expect(createZombie(monster).hp).toEqual(15);
    expect(createZombie(monster).ap).toEqual(5);
  });
});
import { Character, chooseCharacter } from "../src/js/character.js";
import { Monster, createZombie } from "../src/js/monster.js";
import { heroVsMonster, levelUp, continueCombatFunc, nextMonsterFunc } from "../src/js/combat";

describe('heroVsMonster', () => {
  test("should grab the warrior.hp, warrior.ap and zombie.hp, zombie.ap", () => {
    let hero = chooseCharacter(1);
    let zombie = createZombie();
    expect(hero.hp).toEqual(10);
    expect(hero.ap).toEqual(10);
    expect(zombie.hp).toEqual(15);
    expect(zombie.ap).toEqual(5);
  });


  test("should find the difference of hero.hp and zombie.ap and the difference between zombie.hp and hero.ap", () => {
    let hero = chooseCharacter(1);
    let zombie = createZombie();
    heroVsMonster(hero, zombie);
    expect(hero.hp).toEqual(5);
    expect(zombie.ap).toEqual(5);
    expect(zombie.hp).toEqual(5);
    expect(hero.ap).toEqual(10);
  });

  test("should check if the current monster is dead by hp <= 0", () => {
    let hero = chooseCharacter(1);
    hero.ap = 15;
    let zombie = createZombie();
    heroVsMonster(hero, zombie);
    expect(zombie.hp).toBeLessThanOrEqual(0);
  });

  test("should print you are dead if hp drops below zero", () => {
    let hero = chooseCharacter(1);
    hero.hp = 0;
    let zombie = createZombie();
    expect(heroVsMonster(hero, zombie)).toEqual("YOU SUCK");
  });
});

describe("levelUp", () => {
  test("should take the current level and add 1", () => {
    let hero = chooseCharacter(1);
    levelUp(hero);
    expect(hero.level).toEqual(2);
  });

  test("should check what role the hero is and change the total hp based on chosen role.", () => {
    let hero = chooseCharacter(1);
    levelUp(hero);
    expect(hero.hp).toEqual(15);
  });

  test("should check what role the hero is and change the total ap based on chosen role.", () => {
    let hero = chooseCharacter(2);
    levelUp(hero);
    expect(hero.ap).toEqual(18);
  });
});

describe("continueCombatFunc", () => {
  test("should check if the response is true or false, then if the response is true, call the nextMonsterFunc", () => {
    let hero = chooseCharacter(1);
    levelUp(hero);
    let response = true;
    continueCombatFunc(hero, response);
    expect(continueCombatFunc(hero, response)).toEqual('calling nextMonsterFunc');
  });
});

describe("nextMonsterFunc", () => {
  test("should check the current level of the hero and call a monster based on the hero's current level", () => {
    let hero = chooseCharacter(1);
    hero.level = 3;
    expect(nextMonsterFunc(hero)).toEqual("Cthulu");
  });
});
// describe('combatFunc'), () => {
//     test("should return updated hp values after the function runs")

// }
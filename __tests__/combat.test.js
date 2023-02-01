import { Character, chooseCharacter } from "../src/js/character.js";
import { Monster, createZombie } from "../src/js/monster.js";
import { heroVsMonster, levelUp} from "../src/js/combat";

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
});

describe("levelUp", () => {
    test("should take the current level and add 1", () => {
        let hero = chooseCharacter(1);
        levelUp(hero);
        expect(hero.level).toEqual(2);
    });
});
// describe('combatFunc'), () => {
//     test("should return updated hp values after the function runs")

// }
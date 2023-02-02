import { Character, chooseCharacter } from "./character.js";
import { Monster, createZombie, createOwlBear, createCthulu } from "./monster.js";

export function heroVsMonster(heroCall, monsterCall) {
  let hero = heroCall;
  let zombie = monsterCall;
  hero.hp = hero.hp - zombie.ap;
  zombie.hp = zombie.hp - hero.ap;
  if (zombie.hp <= 0) {
    levelUp(hero);
    continueCombatFunc(hero);
  }
}

export function levelUp(currentHero) {
  currentHero.level++;
  currentHero.hp = currentHero.hpCapacity + 5;
  currentHero.hpCapacity = currentHero.hp;
  currentHero.ap = currentHero.ap + 5;
  return currentHero;
}

export function continueCombatFunc(hero, response) {
  // if (response === 'y') {
  //   nextMonsterFunc(hero)
  // }
}

// export function nextMonsterFunc(currentHero) {
//   let currentMonster;
//   if (currentHero.level === 1) {
//     currentMonster = createZombie();
//   } else if (currentHero.level === 2) {
//     createOwlBear();
//   } else if (currentHero.level === 3) {
//     currentMonster = createCthulu();
//   }
//   heroVsMonster(currentHero, currentMonster);
// }

// function checkHp(hero, monster) {
//     console.log('hero stats:' + hero.hp + ". Monster stats: " + monster.hp );
// }
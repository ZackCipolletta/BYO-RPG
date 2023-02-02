import { javascript } from "webpack";
import { Character, chooseCharacter } from "./character.js";
import { Monster, createZombie, createOwlBear, createCthulu } from "./monster.js";

let myMonster;
export function heroVsMonster(heroCall, monsterCall) {
  let hero = heroCall;
  let monster = monsterCall;
  hero.hp = hero.hp - monster.ap;
  monster.hp = monster.hp - hero.ap;

  
  let response = false;
  if (monster.hp <= 0) {
    levelUp(hero);
    response = true;
    continueCombatFunc(hero, response);
  }
}

export function checkGameState(hero, monster){
  let finalboss = monster;
  if (hero.hp <= 0 ){
    return  "YOU SUCK";
   }
   if (finalboss.name === "Cthulu" && finalboss.hp === 0){
    return "YOU WIN";
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
  if (response === true) {
    nextMonsterFunc(hero);
    return 'calling nextMonsterFunc';
  }
}

export function nextMonsterFunc(currentHero) {
  // let currentMonster;
  if (currentHero.level === 1) {
    myMonster = createZombie();
  } else if (currentHero.level === 2) {
    myMonster = createOwlBear();
  } else if (currentHero.level === 3) {
    myMonster = createCthulu();
  }
  heroVsMonster(currentHero, myMonster);
  return myMonster.name;
}



// function checkHp(hero, monster) {
//     console.log('hero stats:' + hero.hp + ". Monster stats: " + monster.hp );
// }
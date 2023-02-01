import { Character, chooseCharacter } from "./character.js";
import { Monster, createZombie } from "./monster.js";

export function heroVsMonster(heroCall, monsterCall) {
    let hero = heroCall;
    let zombie = monsterCall;
    hero.hp = hero.hp - zombie.ap;
    zombie.hp = zombie.hp - hero.ap;  
    // if (zombie.hp <= 0){
    //     levelUp(hero);
    //     nextMonsterFunc(hero);
    // }
        // checkHp(hero, zombie);
}

export function levelUp(currentHero){
    currentHero.level ++;
    return currentHero
   
}

// function checkHp(hero, monster) {
//     console.log('hero stats:' + hero.hp + ". Monster stats: " + monster.hp );
// }
export class Character {
  constructor(role, hp, ap, level) {
    this.role = role;
    this.hp = hp;
    this.ap = ap;
    this.level = level;
  }
}

export function createWarrior() {
  let warrior = new Character("warrior", 10, 10, 1);
  return warrior;
}

export function createMage() {
  let mage = new Character("mage", 7, 13, 1);
  return mage;
}

export function createRogue() {
  let rogue = new Character("rogue", 5, 15, 1);
  return rogue;
}


export function chooseCharacter(type) {
  if (type ===1) {
    return createWarrior();
  } else if (type === 2) {
    return createMage();
  } else if (type === 3) {
    return createRogue();
  }
}

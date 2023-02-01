export class Monster {
  constructor(name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
  }
}

export function createZombie() {
  let zombie = new Monster("zombie", 15, 5);
  return zombie;
}

// export function createOwlBear() {
//   let owlBear = new Monster("owlBear", 30, 8);
//   return owlBear;
// }

//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }

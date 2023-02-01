
import Character from '../src/js/character.js';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("warrior", 10, 10, 1);
  });


  test('should create new character with attrivutes', () => {
    expect(character.role).toEqual("warrior");
    expect(character.hp).toEqual(10);
    expect(character.ap).toEqual(10);
    expect(character.level).toEqual(1);
  });
});

//   test('should correctly get the area of a rectangle object', () => {
//     expect(rectangle.getArea()).toEqual(15);
//   });
// });

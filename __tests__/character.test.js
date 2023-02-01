
import Character from '../src/js/character.js';
// import createWarrior from '../src/js/character.js';

describe('Character', () => {

  // beforeEach(() => {
  //   character = new Character("warrior", 10, 10, 1);
  // });


  test('should create new character with attributes', () => {
    let character = new Character("warrior", 10, 10, 1);
    expect(character.role).toEqual("warrior");
    expect(character.hp).toEqual(10);
    expect(character.ap).toEqual(10);
    expect(character.level).toEqual(1);
  });
});



describe('createWarrior', () => {
  test('should call the createWarrior method', () => {
    let character = new Character("warrior", 10, 10, 1);
    expect(character.role).toEqual("warrior");
    expect(character.hp).toEqual(10);
    expect(character.ap).toEqual(10);
    expect(character.level).toEqual(1);
  });
});


import { Character, chooseCharacter, createWarrior, createMage, createRogue } from '../src/js/character.js';

describe('Character', () => {

  test('should create new character with attributes', () => {
    let character = new Character("warrior", 10, 10, 1);
    expect(character.role).toEqual("warrior");
    expect(character.hp).toEqual(10);
    expect(character.ap).toEqual(10);
    expect(character.level).toEqual(1);
  });
});



describe('createWarrior', () => {
  test('should call the createWarrior function', () => {
    let character = new Character("warrior", 10, 10, 1);
    expect(createWarrior(character).role).toEqual("warrior");
    expect(createWarrior(character).hp).toEqual(10);
    expect(createWarrior(character).ap).toEqual(10);
    expect(createWarrior(character).level).toEqual(1);
  });
  });

  describe('createMage', () => {
    test('should call the createMage function', () => {
      let character = new Character("mage", 7, 13, 1);
      expect(createMage(character).role).toEqual("mage");
      expect(createMage(character).hp).toEqual(7);
      expect(createMage(character).ap).toEqual(13);
      expect(createMage(character).level).toEqual(1);
    });
  });

  describe('createRogue', () => {
    test('should call the createRogue function', () => {
      let character = new Character("rogue", 5, 15, 1);
      expect(createRogue(character).role).toEqual("rogue");
      expect(createRogue(character).hp).toEqual(5);
      expect(createRogue(character).ap).toEqual(15);
      expect(createRogue(character).level).toEqual(1);
    });
  });

  describe('chooseCharacter', () => {
    test('should return chosen character based on the value of type passed into the function', () => {
      expect(chooseCharacter(1)).toEqual(createWarrior());
    });
  });

  describe('chooseCharacter', () => {
    test('should return chosen character based on the value of type passed into the function', () => {
      expect(chooseCharacter(2)).toEqual(createMage());
    });
  });

  describe('chooseCharacter', () => {
    test('should return chosen character based on the value of type passed into the function', () => {
      expect(chooseCharacter(3)).toEqual(createRogue());
    });
  });
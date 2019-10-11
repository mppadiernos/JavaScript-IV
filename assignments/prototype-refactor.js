/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject (objAttributes) {
//     this.createdAt = objAttributes.createdAt;
//     this.name = objAttributes.name;
//     this.dimensions = objAttributes.dimensions;
// }
// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`
// };

class GameObject {
    constructor(objAttributes) {
        this.createdAt = objAttributes.createdAt;
        this.name = objAttributes.name;
        this.dimensions = objAttributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

// function CharacterStats(charAttributes) {
//     GameObject.call(this, charAttributes);
//     this.healthPoints = charAttributes.healthPoints;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`
// };

class CharacterStats extends GameObject {
    constructor(charAttributes) {
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
//
// function Humanoid(humanAttributes) {
//     CharacterStats.call(this, humanAttributes);
//     this.team = humanAttributes.team;
//     this.weapons = humanAttributes.weapons;
//     this.language = humanAttributes.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`
// };

class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

let  mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

let  swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

let  archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
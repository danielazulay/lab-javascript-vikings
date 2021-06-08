// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(demage) {
    this.health = this.health - demage;
    if (this.health > 0) {
      return `A Saxon has received ${demage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxo) {
    this.saxonArmy.push(saxo);
  }
  vikingAttack() {
    let attacker = Math.floor(Math.random() * this.vikingArmy.length);
    let receiver = Math.floor(Math.random() * this.saxonArmy.length);
    this.saxonArmy[receiver].receiveDamage(this.vikingArmy[attacker].strength);
    let retirar = this.saxonArmy.map((soldado, index) => {
      if (soldado.health < 1) {
        this.saxonArmy.splice(index, 1);
      }
    });

    return `A Saxon has died in combat`;
  }
  saxonAttack() {
    let receiver = Math.floor(Math.random() * this.vikingArmy.length);
    let attacker = Math.floor(Math.random() * this.saxonArmy.length);
    this.vikingArmy[receiver].receiveDamage(this.saxonArmy[attacker].strength);
    let retirar = this.vikingArmy.map((soldado, index) => {
      if (soldado.health < 1) {
        this.vikingArmy.splice(index, 1);
      }
    });
    return `Harald has received ${this.saxonArmy[attacker].strength} points of damage`;
  }
  showStatus() {

    if(this.saxonArmy.length<1){

      return "Vikings have won the war of the century!"
    } else  if(this.vikingArmy.length<1){

      return "Saxons have fought for their lives and survived another day..."
    }else if(this.saxonArmy.length===1 && this.vikingArmy.length===1){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

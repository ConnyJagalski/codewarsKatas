// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker;
  let health1 = fighter1.health;
  let health2 = fighter2.health;
  while (health1 > 0 && health2 > 0) {
    if (attacker === fighter1.name) {
      health2 = health2 - fighter1.damagePerAttack;
      attacker = fighter2.name;
    } else {
      health1 = health1 - fighter2.damagePerAttack;
      attacker = fighter1.name;
    }
  }
  if (health1 < health2) {
    return fighter2.name;
  } else {
    return fighter1.name;
  }
}

console.log(
  declareWinner(
    new Fighter("Lew", 10, 2),
    new Fighter("Harry", 5, 4),
    "Lew"
  ) === "Lew"
);
console.log(
  declareWinner(
    new Fighter("Lew", 10, 2),
    new Fighter("Harry", 5, 4),
    "Harry"
  ) === "Harry"
);
console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harry"
  ) === "Harald"
);
console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harald"
  ) === "Harald"
);
console.log(
  declareWinner(
    new Fighter("Jerry", 30, 3),
    new Fighter("Harald", 20, 5),
    "Jerry"
  ) === "Harald"
);
console.log(
  declareWinner(
    new Fighter("Jerry", 30, 3),
    new Fighter("Harald", 20, 5),
    "Harald"
  ) === "Harald"
);

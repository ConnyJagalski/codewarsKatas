// The Kata

// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid.

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// Examples

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Result:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

function streetFighterSelection(fighters, start, moves) {
  let position = [start[0], start[1]];
  let result = [];

  for (let move of moves) {
    let [row, col] = position;

    if (move === "up") {
      row = 0; // Always stay on the first row
    } else if (move === "down") {
      row = 1; // Always stay on the second row
    } else if (move === "left") {
      col = (col - 1 + fighters[row].length) % fighters[row].length; // Circular left movement
    } else if (move === "right") {
      col = (col + 1) % fighters[row].length; // Circular right movement
    }

    result.push(fighters[row][col]);
    position = [row, col];
  }

  return result;
}

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

console.log(
  streetFighterSelection(
    fighters,
    [0, 0],
    ["up", "left", "right", "left", "left"]
  ).join("") === ["Ryu", "Vega", "Ryu", "Vega", "Balrog"].join("")
);
console.log(
  streetFighterSelection(fighters, [0, 0], []).join("") === [].join("")
);
console.log(
  streetFighterSelection(
    fighters,
    [0, 0],
    ["left", "left", "left", "left", "left", "left", "left", "left"]
  ).join("") ===
    [
      "Vega",
      "Balrog",
      "Guile",
      "Blanka",
      "E.Honda",
      "Ryu",
      "Vega",
      "Balrog",
    ].join("")
);
console.log(
  streetFighterSelection(
    fighters,
    [0, 0],
    ["right", "right", "right", "right", "right", "right", "right", "right"]
  ).join("") ===
    [
      "E.Honda",
      "Blanka",
      "Guile",
      "Balrog",
      "Vega",
      "Ryu",
      "E.Honda",
      "Blanka",
    ].join("")
);
console.log(
  streetFighterSelection(
    fighters,
    [0, 0],
    ["up", "left", "down", "right", "up", "left", "down", "right"]
  ).join("") ===
    ["Ryu", "Vega", "M.Bison", "Ken", "Ryu", "Vega", "M.Bison", "Ken"].join("")
);
console.log(
  streetFighterSelection(
    fighters,
    [0, 0],
    ["down", "down", "down", "down"]
  ).join("") === ["Ken", "Ken", "Ken", "Ken"].join("")
);
console.log(
  streetFighterSelection(fighters, [0, 0], ["up", "up", "up", "up"]).join(
    ""
  ) === ["Ryu", "Ryu", "Ryu", "Ryu"].join("")
);

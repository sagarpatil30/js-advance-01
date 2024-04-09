// destructuring the array
// Destructuring the array in JavaScript simply means extracting multiple values from data stored in objects and arrays.

const restaurtant = {
  name: "Classico Ita",
  location: " 123 Main Street California ",
  categories: ["Italian", "Pizzeria", "Vegetarian"],
  statermenu: ["Garlic-Bread", "Caesar-Salad", "Salad"],
  maincourse: ["Spaghetti-Bolognese", "Grilled-Salmon", "Desserts"],

  // method
  order: function (starterIndex, mainIndex) {
    return [this.statermenu[starterIndex], this.maincourse[mainIndex]];
  },
};

console.log(restaurtant.order(2, 0));

// syntax for Destructuring
let [first, second] = restaurtant.categories;
console.log(first, second);

// swaping the both elements without destructuring
const swap = first;
first = second;
second = swap;
console.log(first, second);

// swaping the both elements with destructuring
[first, second] = [second, first];
console.log(first, second);

// we can skip the middle element by leaving the gap
const [a, , b] = restaurtant.maincourse;
console.log(a, b);

// skiping the middle element
const nestedArray = [2, 3, [1, 0]];
const [i, , k] = nestedArray;
console.log(i, k);
// -------------------------------
const nested = [2, 3, [1, 0]];
const [o, , [j, p]] = nested;
console.log(o, j, p);

// default values
const [l, q, r] = [8, 9, 3];
console.log(l, q, r);

// this how defalut values works
const [team1 = 1, team2 = 2, team3 = 3] = [20, 30];
console.log(team1, team2, team3);
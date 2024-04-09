
// destructuring the array 
// Destructuring the array in JavaScript simply means extracting multiple values from data stored in objects and arrays.


const restaurtant = {
  name: "Classico Ita",
  location: " 123 Main Street California ",
  categories: ["Italian", "Pizzeria", "Vegetarian"],
  statermenu: ["Garlic-Bread", "Caesar-Salad"],
  maincourse: ["Spaghetti-Bolognese", "Grilled-Salmon", "Desserts"],
};

// syntax for Destructuring
let [first , second] = restaurtant.categories;
console.log(first,second);

// swaping the both elements without destructuring
const swap = first;
first = second;
second = swap;
console.log(first, second);

// swaping the both elements with destructuring
[first, second] = [second,first]
console.log(first,second);

// we can skip the middle element by leaving the gap
const [a, ,b] = restaurtant.maincourse;
console.log(a,b);
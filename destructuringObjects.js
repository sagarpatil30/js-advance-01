// object destructuing 

const restaurtant = {
  name: "Classico Ita",
  location: " 123 Main Street California ",
  categories: ["Italian", "Pizzeria", "Vegetarian"],
  statermenu: ["Garlic-Bread", "Caesar-Salad", "Salad"],
  maincourse: ["Spaghetti-Bolognese", "Grilled-Salmon", "Desserts"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  // method
  order: function (starterIndex, mainIndex) {
    return [this.statermenu[starterIndex], this.maincourse[mainIndex]];
  },
};


const {name, openingHours, categories} = restaurtant;
console.log(name,openingHours,categories);
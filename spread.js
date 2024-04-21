// spread operator in js

const arr = [1, 2, 3];
const newArr = [...arr, 6, 7, 8];
console.log(newArr);

const obj = {
  tech: "react",
  exp: "1+years",
};
const newObj = {
  role: "webdeveloper",
};

console.log({ ...newObj, ...obj });

// with strings
const str = "javascript";
const strJs = [...str];
console.log(strJs);

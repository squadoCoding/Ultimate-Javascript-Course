// Run this file using node.js
let myPrimise = new Promise((resolve, reject) => {
  console.log("I am a log inside the promise");
  resolve(56);
});

console.log("hellow-1");
setTimeout(() => {
  console.log("hwllow-2");
}, 2000);
console.log("hellow-3");
console.log(myPrimise);

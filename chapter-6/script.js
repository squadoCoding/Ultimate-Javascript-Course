// console.log("Tkhis is my console.log");
// let a = 76;
// let b = 9;
// console.log(a + b);
console.log(console);

// some console methods
console.log("log");
console.error("err");
console.warn("This is the most important warning in this world");
console.info("This is a very imkportant information");
console.assert("Hey that is wrong", 7 > 9);
console.table({
  name: "siddhant",
  channel: "squadoCoding",
  subscribers: 100000,
});

const arr = [67, 74, 82];
console.time("forof");
for (let i of arr) {
  console.log(i);
}
console.timeEnd("forof");

console.time("for");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.timeEnd("for");

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("I am a promise and I am fulfilled");
    resolve(true);
  }, 5000);
});
let p2 = new Promise((reject) => {
  setTimeout(() => {
    console.log("I am a promise and I am fulfilled");
    reject(new Error("This promise has been rejected"));
  }, 5000);
});

console.log(p1);
p1.then((value) => {
  console.log("The promise has been resolved with the calue of " + value);
  console.log(p1);
});

console.log(p2);
// p2.catch((error) => {//function to handle errors
//   console.log("The promise has been rejected with the error of " + error);
//   console.log(p2);
// });
// p2.then(
//   (value) => {
//     console.log("The promise has been resolved with the calue of " + value);
//     console.log(p1);
//   },
//   (error) => {
//     function to handle errors
//     console.log("The promise has been rejected with the error of " + error);
//     console.log(p2);
//   }
// );
p2.then(null, (error) => {
  //function to handle errors
  console.log("The promise has been rejected with the error of " + error);
  console.log(p2);
});

fetch("https://google.com");

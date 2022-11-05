// Practise set of last chapeter (chapter-12) of ultimate javascript course
// Question-1
// const pAfterTwoS = message =>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log(message);
//       resolve();
//     },2000);
//   });
// };

// (async()=>{
//   await pAfterTwoS("Hellow");
//   await pAfterTwoS("World")
// })();

// Question-2
// const getAve = (a,b,c) => console.log((a+b+c)/3);
// const arr = [3,4,5];

// getAve(...arr);

// Questionk-3
// const f = (msg,n)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log(msg);
//       resolve();
//     },n);
//   });
// };

// (async()=>{
//   await f("I am resolving after 1 second",1000);
//   await f("I am resolving after 3 seconds",3000);
// })();

// Question-4
const simpleIntrust = (p, r, t) => {
  return (p * r * t) / 100;
};

console.log(simpleIntrust(1000, 5, 1));

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("resolved after 3 seconds");
//     resolve(50);
//   }, 3000);
// });
// p1.then((value) => {
//   console.log(value);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am resolved");
//     }, 3000);
//   });
// })
//   .then((value) => {
//     console.log(value);
//     return 2;
//   })
//   .then(() => {
//     console.log("Are siraf 2, Kya kanjus loge hai");
//   });

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(1);
    };
    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript(
  `https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js`
);

p1.then((value) => {
  console.log(value);
});

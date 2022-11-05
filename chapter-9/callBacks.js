// Example of Syncronous programming
// let a = 34;
// console.log("The value of a is " + a);

// Example of Asyncronous programming
// console.log("Start");
// setTimeout(() => {
//   console.log("Hey I am good");
// }, 3000);
// console.log("end");

// Callbacks
const loadScript = (src, callback) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("Your script is loaded");
    callback(null, src);
  };
  script.onerror = () => {
    console.log("Your script could not load");
    callback(new Error("Script ran into some problem"), src);
  };
  document.body.appendChild(script);
};

const hellow = (err, src) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("hellow-" + src);
};

loadScript(
  `https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js`,
  hellow
);

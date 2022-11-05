const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 3000);
  });
};

(async () => {
  const a = await p();
  console.log(a);
  const b = await p();
  console.log(b);
  const c = await p();
  console.log(a);
})();

const sayHellow = (name) => console.log("Hello " + name);

const x = {
  name: "siddhant",
  roll: "js developer",
  exp: 2,
  show: function () {
    setTimeout(() => {
      console.log("I am ", this.name);
    }, 2000);
  },
};
// sayHellow("Siddhant");
// console.log(x.exp);
x.show();

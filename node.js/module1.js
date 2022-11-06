// This is a very good common js module
const hellow = () => {
  console.log("Hellow siddhant");
};

const complexHellow = (name) => {
  console.log("Hellow " + name);
};

module.exports = { hellow, complexHellow }; // this line is dsame as bellow line
// module.exports = {hellow: hellow, complexHellow: complexHellow};

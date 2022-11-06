// This is a very good ES6 module
// to use ES6 modules in a project we need to set '"type": "module"' in package.json of a node.js project

export const hellow = () => {
  console.log("Hellow siddhant");
};

export const complexHellow = (name) => {
  console.log("Hellow " + name);
};

// export default complexHellow; // this function will be exported by default

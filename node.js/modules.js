// Modules are external codes which we can include (import) and use in our code
// we can swparately write different logic in different files and use it in a single file using modules
// there are two types of modules in node.js: 1.Common js modules 2.ES6 modules

// common js modules
// const sayHellow = require("./module1");
// sayHellow();

// sayHellow.complexHellow("Sukhda");
// sayHellow.complexHellow("Tejus");
// sayHellow.complexHellow("Varad");
// sayHellow.hellow();
// sayHellow.complexHellow("Harry");
// sayHellow.complexHellow("Srujana");

// This is how we can use js destructuring to get functions firectly by their name because at the end the thing which is being exported from module 1 is a javascript objects
// const { hellow, complexHellow } = require("./module1");

// hellow();
// complexHellow("Sukhda");
// complexHellow("Tejus");
// complexHellow("Varad");
// complexHellow("Harry");
// complexHellow("Srujana");

// ES6 modules
// import complexHellow from "./module2.mjs";
// complexHellow("Tejus");

// import hellow from "./module2.mjs";
// hellow("Sukhda");

// import { complexHellow as hellow } from "./module2.mjs"; // this will import complexHellow but its identifier will be "hellow"
// hellow("Sukhda");

// the fillowing is also destructuring
import { hellow, complexHellow } from "./module2.mjs";

hellow();
complexHellow("Sukhda");

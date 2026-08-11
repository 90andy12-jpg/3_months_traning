import chalk from "chalk";

console.log(chalk.green("hello, Node.js world!"));

import { add, subtract } from "./math.js";

console.log(add(5, 3));       // Output: 8
console.log(subtract(5, 3)); // Output: 2
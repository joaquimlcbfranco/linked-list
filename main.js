import { linkedList } from "./index.js";

// example uses class syntax - adjust as necessary
const list = linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
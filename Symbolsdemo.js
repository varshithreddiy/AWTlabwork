const id = Symbol("id");
const user = {
  name: "Varshith",
  [id]: 101
};

console.log(user[id]);
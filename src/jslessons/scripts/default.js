//default value fot he parameter
function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
let greetings = yell('rohini');
console.log(greetings);
greetings = yell();
console.log(greetings);

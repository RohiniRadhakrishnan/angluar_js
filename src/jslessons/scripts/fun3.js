const names = ['John', 'Sam', 'Peter'];
//
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);
// /* What is the output for the above names is an array pof strings length os a prperty of array it returns a number
//  The lower bound of an array is 0(ZERO)
//  the upper bound of the array is length -1;
//      The inded for John is 0
//      The inde for Sam is 1
//      the index for Peter is 2*/
//const names = ['John', 'Sam', 'Peter'];
//methodspf Array
names.push('Suresh');
console.log('After push:' + names);
//push will add the item at the end
//... is called as the spread operator
//it is represents te entire items i the array
const names2 = [...names, 'Raj'];
console.log('names2:' + names2);
names.unshift('poppy');
console.log('undshift' + names);
// it adds data to the beginning
// so the index no of the res of the values will change now
const names3 = ['raj', ...names];
console.log(names3);
// this will add data at the beginning
// now next methof slice()
// create a new array
const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const b1 = [...bikes.slice(0, 2)];
console.log(b1);
//what is the output?
//slice takes 2 parameters
//from , to
// it has copied 2 values fromindex 0 and assigned to b1
const b2 = [...bikes.slice(2)];
console.log(b2); //last2
const newBikes = [...bikes.slice(0, 2), 'benottto', ...bikes.slice(2)];
console.log('newBikes:' + newBikes);
//new array called new bike is created
const newBikes2 = [...newBikes.slice(0, 2), ...newBikes.slice(4)];
console.log('newBikes2:' + newBikes2);
// new array called newBikes2 is created.
// then from index 0 two values are copied
// then the value from index 4 to last index is copied
//index 3 item was skipped because we give slicing to 0-2 items and add the 4th item

//now next method slice()

const indexOfSam = names.findIndex((names) => names === 'Sam');
console.log('IndexOfSAM:' + indexOfSam);
//writing a function to delete a name form the array?
function deleteName(nametodelete, names) {
  const indexOfname = names.findIndex((n) => n === nametodelete);
  console.log('indexOf name to delete:' + indexOfname);
  const newArray = [
    ...names.slice(0, indexOfname),
    ...names.slice(indexOfname + 1),
  ];
  return newArray;
}
const deletedNames = deleteName('John', names);
console.log(deletedNames);
console.log(names);

//----------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);
// numbers.splice(3, 2); // from the 3rd index
// console.log(numbers);
//----------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
//please comment the next 2 lines
// from the 3rd index delete the next 2 values
//the value in numbers are modified /deleted
//numbers.splice(3,2);
//(method)Array<numbers>.splice(start:number, deleteCount?:number)
//console.log(numbers);
// const pizzaSlice = numbers.slice(2, 4); //start and end index
// console.log('pizzaSlices:' + pizzaSlice);
// console.log('original Numbers:' + numbers);
//are the values in numbers deleted here???
// (method) Array<number>.slice(start? : number,end? : number)
// Immutable method - does not change the source array
// slice-same function has different behaviour
//slice is immutable becoz source is not changed
//splice is mutable becoz source id changed

// const doc = doctorize('rohini');
// console.log(doc);
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }
//anon function
//function (firstName) {
//      return `Dr.${firstName}`;
// }
//Function Expression
const doctorize = function (firstName) {
  return `Dr.${firstName}`;
};
const doc = doctorize('rohini');
console.log(doc);
// These are **not hoisted**, meanng Javascript doesn't put them at the top of the file.
// so id a function is not defined with the finction jeyword,
// and if we try torun it before it id defined(above its definition),
// then ther's an error and the function fails to execur.
//**Arrow Fnctions**
const inchToCM = (inches) => {
  return inches * 2.54;
};
const resultcm = inchToCM(10);
console.log(resultcm);
const funA = () => {
  console.log(`Hi`);
};
funA();
const add = (a, b = 3) => a + b;
const inTocm = (inches) => inches * 2.54;
console.log(add(100));
console.log(inTocm(25));

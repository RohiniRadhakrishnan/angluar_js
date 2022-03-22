var myobject = {
  $x: 0, //if we declare variable using $ then it is private varaible
  get data() {
    console.log('get called');
    return this.x;
  },
  set data(value) {
    if (value <= 0) {
      //   console.log('value should be greater than zero');
      //   return 0;
      throw new Error('value should be grater than Zero');
    }
    this.x = value;
    console.log('set called');
  },
};
myobject.data = 100;
console.log(myobject.data);
myobject.x = 5000;
console.log(myobject.data);

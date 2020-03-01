var add = (first, second) => {
  return first + second;
};

var add = (first, second) => first + second;

var addAndMul = (first, second) => ({
  add: first + second,
  mul: first * second
});

console.log(addAndMul(2, 3));

class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
    var con = 3;
  }
  print() {
    // console.log(this.addThis2(3, 4));
    // console.log(this.addThis3(5, 6));
    console.log(constructor().con);
  }
}

var s = new MyClass();
s.print();

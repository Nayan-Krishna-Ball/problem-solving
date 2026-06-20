//object looping in js

const product = {
  id: 101,
  title: "Wireless Headphones",
  price: 99.99,
  category: "Electronics",
  specs: {
    color: "Black",
    batteryLife: "20 hours",
  },
  model: ["Model A", "Model B"],
};

for (let key in product) {
  //   console.log(`${key}: ${product[key]}`);

  if (typeof product[key] === "object") {
    for (let subkey in product[key]) {
      console.log(`${subkey}: ${product[key][subkey]}`);
    }
  }
}

//Custom map function

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const numbers = [1, 2, 3];

console.log(numbers.myMap((num) => num * 2));

// [2,4,6]

//FizzBuzz problem

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

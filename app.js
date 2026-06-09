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

console.log(
  numbers.myMap(num => num * 2)
);

// [2,4,6]






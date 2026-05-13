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
  //   console.log(`Type of ${key}: ${typeof product[key]}`);

  if (typeof product[key] === "object") {
    for (let subkey in product[key]) {
      console.log(`${subkey}: ${product[key][subkey]}`);
    }
  }
}

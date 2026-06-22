//find longest word 

function longestWord(str) {
  return str
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

console.log(longestWord("I love javascript programming"));

//promise. all
const p1 = Promise.resolve(1);

const p2 = Promise.resolve(2);

const p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3])

  .then(console.log)

  .catch(console.error);

// Output:

// [1, 2, 3]
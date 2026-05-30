//find longest word 

function longestWord(str) {
  return str
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

console.log(longestWord("I love javascript programming"));
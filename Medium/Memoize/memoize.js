
export default function memoize(func) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Returning cached result...");
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}

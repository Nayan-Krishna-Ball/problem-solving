//

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//Example
const search = debounce(() => {
  console.log("API Call");
}, 500);

search();
search();
search();

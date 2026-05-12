//implements currying function

export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      // Once we have enough arguments, execute the original function with the same receiver.
      return func.apply(this, args);
    }

    return (arg) =>
      arg === undefined
        ? // Empty calls keep the chain alive without changing the collected arguments.
          curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
  };
}

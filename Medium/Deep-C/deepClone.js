
  if (typeof value !== 'object' || value === null) {
    // Primitives can be returned directly because they are already immutable values.
    return value;
  }

  if (Array.isArray(value)) {
    // Clone each slot so nested arrays do not share references with the original.
    return value.map((item) => deepClone(item));
  }

  // Rebuild the object with recursively cloned property values.
  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)]),
  );
}

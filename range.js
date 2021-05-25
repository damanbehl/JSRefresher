function range(start = 1, end = 10, step = 1) {
  let current = start;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result;
          if (current <= end) {
            result = { done: false, value: current };
            current += step;
            return result;
          }
          return { done: true };
        },
      };
    },
  };
}

[...range()];

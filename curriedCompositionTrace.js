const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};
// The curried version of trace()
// saves us from writing all this code...
const traceAfterG = value => {
  const label = 'after g';
  console.log(`${ label }: ${ value }`);
  return value;
};
const g = n => n + 1;
const f = n => n * 2;
const h = pipe(
  g,
  traceAfterG,
  f,
  trace('after f'),
);
h(20);
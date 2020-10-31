const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()];
// [1, 2, 3]

[...map.values()];
// ['one', 'two', 'three']

[...map.entries()];
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map];
// [[1,'one'], [2, 'two'], [3, 'three']]
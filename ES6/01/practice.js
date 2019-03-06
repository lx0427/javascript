/* practice 1 */
// let { foo: foo, bar: name } = { foo: "aaa", bar: "bbb" };
// foo // aaa
// bar // bar is not defined
// name // bbb


/* practice 2 */
// let { foo, bar: name } = { foo: "aaa", bar: "bbb" };
// foo // aaa
// name // bbb


/* practice 3 */
// let x = [[1, 2], [3, 4]].map(([a, b]) => a + b);
// x

/* practice 4 */
// const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
// const matchObj = RE_DATE.exec('1999-12-31');
// const year = matchObj[1]; // 1999
// const month = matchObj[2]; // 12
// const day = matchObj[3]; // 31
// console.log(year, month, day);

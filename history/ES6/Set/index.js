const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}


// 数组去重
// [...new Set(array)]
const v = [...new Set([2, 3, 5, 4, 5, 2, 2])]
v


let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}


let setObj = new Set();

setObj.add({});
setObj.size // 1

setObj.add({});
setObj.size // 2
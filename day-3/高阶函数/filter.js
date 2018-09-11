// 在一个Array中，删掉偶数，只保留奇数，可以这么写：
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
  return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

// 把一个Array中的空字符串删掉，可以这么写：

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
  return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r; // ['A', 'B', 'C']

var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
  console.log(element); // 依次打印'A', 'B', 'C'
  console.log(index); // 依次打印0, 1, 2
  console.log(self); // self就是变量arr
  return true;
});

// 去除Array的重复元素，不改变原数组

var r, arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
  return self.indexOf(element) === index;
});
r
arr

'use strict';

function get_primes(arr) {
  return arr.filter((v, index, self) => {
    if (v == 1) {
      return false
    }
    for (var j = 2; j <= (v / 2); j++) {// 任何大于2的数都不能整除超过自己一半的数，即约数不能是1.xxx
      if (v % j === 0) {
        return false
      }
    }
    return true
  })
}
// 测试:
var
  x,
  r,
  arr = [];
for (x = 1; x < 100; x++) {
  arr.push(x);
}
r = get_primes(arr);
console.log(r);;
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
  console.log('测试通过!');
} else {
  console.log('测试失败: ' + r.toString());
}
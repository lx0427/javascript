var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
var b = arr.slice(0, 3); 
b
arr

// 从索引3开始到结束: ['D', 'E', 'F', 'G']
arr.slice(3); 
arr

var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']

var arr = ['one', 'two', 'three'];
arr.reverse(); 
arr;

var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素,返回删除元素:
console.log(arr.splice(2, 3, 'Google', 'Facebook')); 
arr; 
// 只删除,不添加:
console.log(arr.splice(2, 2));
arr; 
// 只添加,不删除:
console.log(arr.splice(2, 0, 'Google', 'Facebook'));
arr;

var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']

var arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-'));
arr


var arr = ['小明', '小红', '大军', '阿黄'];
arr.sort()
console.log(`欢迎${arr.slice(0,3).join(',')}和${arr.pop()}同学！`);

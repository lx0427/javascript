// 数组去重合并
function combine () {
  let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
  return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2, 3, 3];
console.log(combine(m, n));



// 检测所有数组元素
function isBelowThreshold (currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true



// 在数组中搜索
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
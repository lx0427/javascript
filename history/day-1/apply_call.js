/*
 * @Author: mikey.lixiong 
 * @Date: 2018-09-07 08:45:08 
 * @Last Modified by: mikey.lixiong
 * @Last Modified time: 2018-09-07 08:51:19
 */

// 另一个与apply()类似的方法是call()，唯一区别是：

// apply()把参数打包成Array再传入；

// call()把参数按顺序传入

Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5

'use strict';

var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
  count += 1;
  return oldParseInt.apply(null, arguments); // 调用原函数
};

parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3
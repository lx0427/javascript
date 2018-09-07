// 方法
function getAge() {
  var y = new Date().getFullYear();
  console.log(y - this.birth);
  return y - this.birth;
}

var xiaoming = {
  name: '小明',
  birth: 1990,
  age: getAge
};

xiaoming.age(); // 28, 正常结果
getAge(); // NaN

// apply
// apply()类似的方法是call()，唯一区别是：apply()把参数打包成Array再传入；call()把参数按顺序传入。
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空
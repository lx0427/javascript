let s = '{"purpose":{"name":"刚需","val":"y201"},"dictitemcode":{"name":"武昌区","val":"a006"},"price":{},"sort":{},"special":{"val":[{"楼盘亮点":[{"index":0,"index2":1,"index3":0,"name":"低密度","val":"b101","parName":"楼盘亮点"}]},{},{},{},{},{},{},{}],"type":2}}'
let exp = /"name":"(.+?)"/g
let x
/** 
 * exex | Regexp的匹配方法
 * [0] | 与正则表达式相匹配的文本
 * [1] | Regexp.$1 -- (RegExpObject 的第 1 个子表达式相匹配的文本)
 * [2] | Regexp.$2 
 * 以此类推
 * 
*/
while ((x = exp.exec(s)) != null) {
  console.log(x);
  console.log(x[1]);
  console.log(x.index); // 匹配开始的索引
  console.log(exp.lastIndex); // 当前匹配结束的索引
  // exp.lastIndex = 
}

/**
 * match | 字符串的匹配方法
 */
let t = s.match(exp).join(',').replace(/"name":|"/g,'')
t
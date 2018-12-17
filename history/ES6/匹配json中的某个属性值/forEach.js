let s = '{"purpose":{"name":"刚需","val":"y201"},"dictitemcode":{"name":"武昌区","val":"a006"},"price":{},"sort":{},"special":{"val":[{"楼盘亮点":[{"index":0,"index2":1,"index3":0,"name":"低密度","val":"b101","parName":"楼盘亮点"}]},{},{},{},{},{},{},{}],"type":2}}'
s = JSON.parse(s)
let result = []
for (const key in s) {
  if (s.hasOwnProperty(key)) {
    const v = s[key];
    if (v.name) {
      result.push(v.name)
    } else {
      let sonArr = v.val
      if (sonArr) {
        sonArr.forEach(sonObj => {
          for (const key in sonObj) {
            if (sonObj.hasOwnProperty(key)) {
              const itemArr = sonObj[key];
              itemArr.forEach(x=>{
                if (x.name) {
                  result.push(x.name)
                }
              })
            }
          }
        });
      }
    }
  }
}

result


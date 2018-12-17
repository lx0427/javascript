// 要把[1, 3, 5, 7, 9]变换成整数13579

var arr = [1, 3, 5, 7, 9];
var result = arr.reduce(function (x, y) {
  return x * 10 + y;
}); // 13579
result = ["1", "2", "3", "4"].map(parseInt)

result = parseInt('1', '2', '3', '4')


result = ["1"].map((a,b,c,d) => {
  console.log(a,b,c,d);
});
result
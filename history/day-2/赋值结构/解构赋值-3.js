function buildDate({ year, month, day, hour = 0, minute = 0, second = 0 }) {
  return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second)
}

let [x, y] = [
  buildDate({ year: 2017, month: 1, day: 1 }),
  buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 }),
]
x
y
console.log('123')

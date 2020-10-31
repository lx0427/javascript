let arr = [
  [2, 6],
  [2, 3],
  [6, 5],
  [5, 4],
  [4, 6],
]

function xxx(array, size) {
  const package = []
  for (let s = 0; s <= size; s++) {
    for (let i = 0; i < 5; i++) {
      if (array[i][1] > s) {
        package[(s, i)] = 0
        continue
      }
      let residueSize = size - arr[i][0]
      let temp = [...array]
      temp.shift()
      if (residueSize < 0) continue
      console.log(temp)
      // package[s, i] = Math.max((array[i][1] + xxx(temp, residueSize)), xxx(temp, size))
    }
  }
}
xxx(arr, 10)

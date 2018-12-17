let a = '20180927000000'

function filterTime(time) {
  let yyyy = time.slice(0, 4)
  let MM = time.slice(4, 6)
  let dd = time.slice(6, 8)
  let hh = time.slice(8, 10)
  let mm = time.slice(10, 12)
  let ss = time.slice(12, 14)
  return new Date(yyyy+'-'+MM+'-'+dd+' '+hh+':'+mm+':'+ss).getTime()
}
let b = filterTime('20180927000000')
b
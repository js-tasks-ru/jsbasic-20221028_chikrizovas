function filterRange(arr, a, b) {
  // ваш код...
let max=0
if (a>b) {max = a, a=b} else {max = b} //max и a=min
  
let mass = arr.filter (function(item, index, array){
  return item<=max && item>=a
})
return mass
}
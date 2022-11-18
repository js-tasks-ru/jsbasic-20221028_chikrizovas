function camelize(str) {
  // ваш код...
let massStr=str.split('-')
let mass = massStr.map (function(item, index, array){
if (index==0) 
{ 
return item
}
else 
{ 
return item[0].toUpperCase()+item.slice(1)
}
})
return mass.join('')
}
function namify(users) {
  // ваш код...
let mass = users.map (function(item, index, array){
  return item.name
})
return mass
}
function getMinMax(str) {
  // ваш код...
  let mass=str.split(' ')
  let mass_chisel=[]

for (let i=0;i<mass.length;i++)
{
  if (parseFloat(mass[i])) 
  {
    mass_chisel.push(+mass[i])
  }
}

let result= {
  max: Math.max(...mass_chisel),
  min: Math.min(...mass_chisel)
}

return result
}
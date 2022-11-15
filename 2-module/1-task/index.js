function sumSalary(salaries) {
  // ваш код...
let muss=0
  for (let key in salaries) 
  {
  if (Number.isFinite(salaries[key])) muss= muss + salaries[key]
  }
  return muss
}
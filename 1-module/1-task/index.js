function factorial(n) {
  // ваш код...
  if (!n) return 1
  let fac=1
  for (let i=1;i<=n;i++)
  {
    fac=fac*i
  }
  return fac
}

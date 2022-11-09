function checkSpam(str) {
  // ваш код...
  if (str.toLowerCase().indexOf('1xBet'.toLowerCase())!=-1 || str.toLowerCase().indexOf('XXX'.toLowerCase())!=-1) return true
  return false
}

